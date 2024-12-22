import React, { useState } from "react";

const CreateRequest = ({ isVisible, onClose, onSave }) => {
  if (!isVisible) return null;

  const [leaveData, setLeaveData] = useState({
    startDate: "",
    duration: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveData({ ...leaveData, [name]: value });
  };

  const handleSave = () => {
    onSave({ ...leaveData });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-auto z-60 pointer-events-auto relative">
        <h2 className="text-lg font-bold text-center mb-6">Request a Leave</h2>
        <form className="space-y-6">
          {/* Start Date */}
          <div className="flex flex-col">
            <label htmlFor="startDate" className="font-medium mb-2 text-gray-600">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={leaveData.startDate}
              onChange={handleChange}
              className="bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px] px-4 focus:outline-none"
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label htmlFor="duration" className="font-medium mb-2 text-gray-600">
              Duration (Days):
            </label>
            <select
              id="duration"
              name="duration"
              value={leaveData.duration}
              onChange={handleChange}
              className="bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px] px-4 focus:outline-none"
            >
              <option value="" disabled>Select Duration</option>
              {[...Array(15)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Reason */}
          <div className="flex flex-col">
            <label htmlFor="reason" className="font-medium mb-2 text-gray-600">
              Reason for Leave:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={leaveData.reason}
              onChange={handleChange}
              className="bg-[#E3EDF9] text-[#4D587F] rounded-[6px] px-4 py-2 h-[10vh] focus:outline-none"
              placeholder="Provide a reason for your leave..."
            />
          </div>
        </form>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="bg-gray-400 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 h-10 text-white font-semibold py-2 px-4 rounded-md hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            onClick={handleSave}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
