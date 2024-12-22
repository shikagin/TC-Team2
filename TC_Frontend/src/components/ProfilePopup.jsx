import React from 'react';
import defaultPic from "../assets/defaultPic.png";

const ProfilePopup = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Popup Container */}
      <div className="bg-white rounded-2xl p-6 w-1/2 h-3/4 shadow-lg flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-xl">Personal information</p>
          <button
            className="text-gray-500 text-2xl font-bold cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-row">
          {/* Profile Picture */}
          <div className="flex justify-center items-center w-1/3">
            <img
              src={content.profilePic || defaultPic} // Replace with default picture if none
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
            />
          </div>

          {/* User Information */}
          <div className="w-2/3 flex flex-col justify-center space-y-2">
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold text-sm mb-1">First Name</p>
              <div className="border border-gray-400 bg-white rounded-md p-1 text-center text-sm">
                {content.firstName || "Not provided"}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold text-sm mb-1">Last Name</p>
              <div className="border border-gray-400 bg-white rounded-md p-1 text-center text-sm">
                {content.lastName || "Not provided"}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold text-sm mb-1">Email</p>
              <div className="border border-gray-400 bg-white rounded-md p-1 text-center text-sm">
                {content.email || "Not provided"}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold text-sm mb-1">Phone Number</p>
              <div className="border border-gray-400 bg-white rounded-md p-1 text-center text-sm">
                {content.phoneNumber || "Not provided"}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold text-sm mb-1">Role</p>
              <div className="border border-gray-400 bg-white rounded-md p-1 text-center text-sm">
                {content.role || "Not provided"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
