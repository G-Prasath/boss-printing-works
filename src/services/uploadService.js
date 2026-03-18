import axios from "axios";
import { db, collection, addDoc } from "../firebase/config.js";

const API_BASE_URL = "https://email-plus-cloudinary.onrender.com/api/images";

export const uploadImage = async (file, title, categories) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Append title and categories to the response data
    const finalData = {
      ...response.data,
      title,
      categories,
      createdAt: new Date(),
    };

    console.log("Final data:", finalData);

    // Store in Firebase
    try {
      const docRef = await addDoc(collection(db, "uploads"), finalData);
      finalData.id = docRef.id;
    } catch (firebaseError) {
      console.error("Error adding document: ", firebaseError);
    }

    return finalData;
  } catch (error) {
    throw error;
  }
};

export const deleteImage = async (public_id) => {
  try {
    console.log("Sending ID:", public_id);

    const response = await axios.delete(`${API_BASE_URL}/delete`, {
      data: { public_id }, // 👈 important for DELETE request
    });

    console.log("Cloudinary Delete:", response.data);

    return response.data;
  } catch (error) {
    console.error("Delete API error:", error);
    throw error;
  }
};
