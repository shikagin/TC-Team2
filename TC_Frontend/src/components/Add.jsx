import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'; // Ensure this import is correct

const Add = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.FirstName.trim()) {
      newErrors.FirstName = "First Name is required.";
    }

    if (!formData.LastName.trim()) {
      newErrors.LastName = "Last Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (validateForm()) {
      setSubmitted(true);
      onClose(); // Close the modal only if validation passes
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-[90vh] z-60 pointer-events-auto relative">
        <h2 className="text-lg font-bold text-center mb-4">Modify Employee</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="First Name"
            />
            {errors.FirstName && (
              <span className="text-red-500 text-sm">{errors.FirstName}</span>
            )}
          </div>
          {/* Last Name */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Last Name"
            />
            {errors.LastName && (
              <span className="text-red-500 text-sm">{errors.LastName}</span>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-gray-400 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
