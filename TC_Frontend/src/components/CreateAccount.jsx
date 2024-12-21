import React from "react";

const CreateAccount = () => {


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Popup content */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-60 pointer-events-auto relative">
       
        {/* Form */}
        <form className="space-y-8">

          {/* First Name */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>First Name</p>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
              placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>Last Name</p>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
              placeholder="Enter last name"
            />
          </div>

          {/* Email */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>Email</p>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>Password</p>
            <input
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
              placeholder="Enter password"
            />
          </div>

          {/* Phone Number */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>Phone Number</p>
            <input
              type="tel"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
              placeholder="Enter phone number"
            />
          </div>

          {/* Role Toggle */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[4vh] rounded-[6px]">
            <p>Role</p>
            <select
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1"
            >
              <option value="RH">RH</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
