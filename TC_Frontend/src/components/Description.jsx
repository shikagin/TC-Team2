import React from "react";



const Description = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;
 
  const {title, description}= content;


  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Popup content */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[80vh] z-60 pointer-events-auto relative">
        {/* Form */}
        <form className="space-y-8">

          {/* Title */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p>Title</p>
            <p>{title}</p>

          </div>

          {/* Discreption */}
          <div className="flex gap-3 pl-4 pt-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">
          
            <p>Discription</p>
            <p> {description} </p>
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

export default Description;