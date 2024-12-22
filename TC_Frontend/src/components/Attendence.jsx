import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";


const AttendencePop = ({ isVisible, onClose, content }) => {

  if (!isVisible) return null;
  const {  WorkingDays,
      Leave,
      Overtime,
      Abscences
     } = content;


  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Popup content */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[80vh] z-60 pointer-events-auto relative">
      <div className="flex items-center justify-start mb-4">
            <IoIosRadioButtonOn className="text-green-500 mr-2 text-lg" />
             <h2 className="text-lg font-bold">Attendance</h2>
      </div>
        {/* Form */}
        <form className="space-y-8">

          {/* WorkingDays*/}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p>Working Days</p>
            <p>{WorkingDays}</p>

          </div>

          {/* Leave*/}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p> Leave </p>
            <p>{ Leave}</p>
          </div>


          {/* Overtime*/}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p>Overtime</p>
            <p>{Overtime}</p>

          </div>


          {/*  Abscences*/}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p>Abscences</p>
            <p>{Abscences}</p>

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

export default AttendencePop;
