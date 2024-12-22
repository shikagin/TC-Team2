import React, { useState } from "react";
import { FiPhone, FiUser } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { MdWork } from "react-icons/md";

const ModifyPopup = ({ isVisible, onClose, content, onSave }) => {
  if (!isVisible) return null;

  const [employeeData, setEmployeeData] = useState(content);

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = () => {
    onSave({ ...employeeData, profileImage: image });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-[90vh] z-60 pointer-events-auto relative">
        <h2 className="text-lg font-bold text-center mb-4">Modify</h2>
        <form className="space-y-4">
          {/* First Name */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="firstName"
              value={employeeData.firstName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="First Name"
            />
          </div>
          {/* Last Name */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="lastName"
              value={employeeData.lastName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Last Name"
            />
          </div>
          {/* Phone Number */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiPhone className="text-[#4D587F] text-lg" />
            <input
              type="tel"
              name="phoneNumber"
              value={employeeData.phoneNumber}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Phone Number"
            />
          </div>
          {/* Email */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <SiGmail className="text-[#4D587F] text-lg" />
            <input
              type="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Email"
            />
          </div>
          {/* Role */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <MdWork className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="role"
              value={employeeData.role}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Role"
            />
          </div>
          {/* Password */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="password"
              name="password"
              value={employeeData.password || ""}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Password"
            />
          </div>
          {/* Profile Image Upload */}
          <div className="flex flex-col">
            <label className="text-[#4D587F] font-medium mb-2">Profile Image</label>
            <div className="flex items-center justify-center border-2 border-gray-300 rounded-md py-2">
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
                id="imageUpload"
              />
              <label htmlFor="imageUpload" className="cursor-pointer text-center text-gray-600 hover:text-gray-800">
                {image ? image.name : "Choose Image"}
              </label>
            </div>
          </div>
        </form>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-gray-400 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyPopup;
