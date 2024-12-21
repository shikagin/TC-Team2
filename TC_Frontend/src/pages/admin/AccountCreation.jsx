import React, { useState } from 'react';

function CreationCompte() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!phonePattern.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number must be exactly 10 digits';
    }

    if (!image) {
      errors.image = 'Please upload an image';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can proceed with user creation logic
      alert('User created successfully!');
    }
  };

  return (
    <div className='bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-5'>
      <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
        <p className='font-bold text-2xl mb-4'>Account Creation</p>
        <form onSubmit={handleSubmit} className='grid grid-rows-5 grid-cols-2 gap-8 h-full'>
          {/* First Name */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">First Name</label>
            <input
              type="text"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
              placeholder="Enter first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">Last Name</label>
            <input
              type="text"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
              placeholder="Enter last name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
              placeholder="Enter email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email pattern
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
              placeholder="Enter phone number"
              required
              pattern="^\d{10}$" // Phone number pattern
              title="Phone number should be 10 digits"
            />
            {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
          </div>

          {/* Image Upload */}
          <div className="flex flex-col mb-4">
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
                {image ? image.name : 'Choose Image'}
              </label>
            </div>
            {formErrors.image && <p className="text-red-500 text-sm">{formErrors.image}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">Password</label>
            <input
              type="password"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Role Toggle */}
          <div className="flex flex-col mb-4">
            <label className="text-[#4D587F] font-medium mb-2">Role</label>
            <select
              className="block w-full max-w-xs border-gray-300 rounded-md shadow-sm focus:ring-color1 focus:border-color1 p-2"
            >
              <option value="RH">RH</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-color1 h-10 text-white font-semibold py-2 px-4 rounded-md hover:bg-color2"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreationCompte;
