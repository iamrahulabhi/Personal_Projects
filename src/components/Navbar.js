import React from "react";
import { IoFlash } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function privacyClick() {
    navigate("/terms");
  }
  return (
    <div className="w-full bg-gray-800 py-4 fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        {/* Flash Icon */}
        <IoFlash className="text-sky-400 text-3xl" aria-label="Brand Icon" />

        {/* Privacy Policy Button */}
        <button
          onClick={privacyClick}
          className="text-white/90 px-4 py-2 rounded-lg shadow hover:scale-102 transition transform"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default Navbar;
