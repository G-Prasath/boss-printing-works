import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import { User } from "lucide-react";

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNav = (id) => {
    go(id);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-glass shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex flex-col leading-none"
          >
            <img src="/logo.png" className="w-[150px]" alt="" />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(([label, id]) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  className={`font-cond tracking-[1.5px] text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    active === id
                      ? "bg-[#e8006f] text-white shadow-[0_4px_16px_rgba(232,0,111,.4)]"
                      : scrolled
                        ? "text-gray-600 hover:text-[#e8006f]"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919092551753"
              className="btnp text-[14px] px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              <User size={19} />
              Chat Now
            </a>
           
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-[#0c0c14]" : "bg-white"}
                ${i === 0 && open ? "rotate-45 translate-y-[7px]" : ""}
                ${i === 1 && open ? "opacity-0" : ""}
                ${i === 2 && open ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-7">
          {NAV_LINKS.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="font-display text-3xl font-bold text-[#0c0c14] hover:text-[#e8006f] transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="btnp px-8 py-3.5 rounded-full text-base mt-2"
          >
            Get Quote ✨
          </button>
        </div>
      )}
    </>
  );
}
