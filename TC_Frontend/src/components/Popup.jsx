import React from "react";
import { FiPhone, FiImage, FiUser } from "react-icons/fi"; // Import icons
import { SiGmail } from "react-icons/si";
import { MdWork } from "react-icons/md";

const Popup = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;
  const { firstName, lastName, phoneNumber, email, role } = content;


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Popup content */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[80vh] z-60 pointer-events-auto relative">
        {/* Form */}
        <form className="space-y-8">

          {/* First Name */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <p>First Name</p>

            <p>{firstName}</p>

          </div>

          {/* Last Name */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <p>Last Name</p>
            <p>{lastName}</p>
          </div>

          {/* Phone Number */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiPhone className="text-[#4D587F] text-lg" />
            <p>Phone Number</p>
            <p>{phoneNumber}</p>
          </div>

          {/* Email */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <SiGmail className="text-[#4D587F] text-lg" />
            <p>Email</p>
            <p>{email}</p>
          </div>

          {/* Image Button */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiImage className="text-[#4D587F] text-lg" />
            <button
              type="button"
              onClick={() => alert("Image Clicked!")}
              className="px-4 py-1 bg-[#E3EDF9] text-[#4D587F] rounded-md hover:bg-color1-dark"
            >
              Image
            </button>
          </div>

          {/* Role Toggle */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <MdWork className="text-[#4D587F] text-lg" />
            <p>Role</p>
            <p>{role}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute bottom-6 right-4 font-bold bg-[#E3EDF9] text-[#4D587F] px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
