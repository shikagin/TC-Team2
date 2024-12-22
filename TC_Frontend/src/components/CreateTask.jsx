import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdWork } from "react-icons/md";

const CreateTask = ({ isVisible, onClose }) => {

  if (!isVisible) return null;

  const [taskData, settaskData] = useState({
    title: "",
    discreption: "",
    deadline:"",
    role:"",
  });
 
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    settaskData({ ...taskData, [name]: value });
  };

 

  const handleSave = () => {
    onSave({ ...taskData });
    onClose();
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-[90vh] z-60 pointer-events-auto relative">
        <h2 className="text-lg font-bold text-center mb-4">Task Assigning</h2>
        <form className="space-y-16">
          {/* Task */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="title"
              value={taskData.firstName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Title Of Task "
            />
          </div>

          {/*Description*/}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name=""
              value={taskData.lastName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Last Name"
            />
          </div>

          {/*Description*/}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <FiUser className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name=""
              value={taskData.lastName}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Last Name"
            />
          </div>
         
        
          {/* Role */}
          <div className="flex gap-3 pl-4 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
            <MdWork className="text-[#4D587F] text-lg" />
            <input
              type="text"
              name="role"
              value={taskData.role}
              onChange={handleChange}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Role"
            />
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

export default CreateTask;