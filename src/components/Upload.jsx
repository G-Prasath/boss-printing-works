import { useState, useRef, useEffect } from "react";
import { deleteImage, uploadImage } from "../services/uploadService";

import { db, collection, getDocs, doc, deleteDoc } from "../firebase/config.js";

const categories = ["FLEX PRINTING", "DIGITAL ARTS", "VISION & SPACE", "OTHER"];

export default function Upload() {
  const [file, setFile] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleDelete = async (uploadId) => {
    console.log(uploadId);

    try {
      // ✅ Find the item from state
      const item = gallery.find((img) => img.id === uploadId);

      if (!item) {
        console.error("Item not found");
        return;
      }

      const public_id = item.public_id;

      // ✅ Send to backend (Cloudinary delete)

      await deleteImage(public_id);

      // ✅ Delete from Firestore
      await deleteDoc(doc(db, "uploads", uploadId));

        // ✅ Update local state
        setGallery((prev) => prev.filter((img) => img.id !== uploadId));
        
    } catch (error) {
      console.error("Error deleting upload:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const result = await uploadImage(file, title, selectedCategories);

      // Add new upload to gallery
      setGallery((prev) => [result, ...prev]);

      // Reset form
      setFile(null);
      setTitle("");
      setSelectedCategories([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "uploads"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setGallery(data);
    };

    fetchData();
  }, []);



  const isFormValid =
    file && title.trim() && selectedCategories.length > 0 && !isUploading;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">
            Upload
          </p>
          <h1
            className="font-display font-bold text-[#0c0c14] leading-[1.08] mb-3"
            style={{ fontSize: "clamp(30px,4.5vw,50px)" }}
          >
            Add New <span className="gtext">Media</span>
          </h1>
          <p
            className="font-body text-gray-400 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: 16 }}
          >
            Upload your designs, specify title and category for easy management.
          </p>
        </div>

        {/* Upload Form */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Select File
              </label>
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                onChange={(e) => setFile(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category (Select multiple)
              </label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid || isUploading}
              className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors ${
                isFormValid && !isUploading
                  ? "bg-[#e8006f] hover:bg-[#d10061] text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>

        {/* Previous Uploads */}
        <div>
          <h2 className="font-display font-bold text-[#0c0c14] text-3xl mb-8">
            Previous Uploads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((upload) => (
              <div
                key={upload.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={upload.imageUrl}
                  alt={upload.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#0c0c14] mb-1">
                    {upload.title}
                  </h3>
                  <p className="text-sm text-[#e8006f] font-medium mb-3">
                    {upload.categories.join(", ")}
                  </p>

                  <button
                    onClick={() => handleDelete(upload.id)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
