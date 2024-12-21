import React, { useState } from "react";

function CheckPopup() {
  const [popupMessage, setPopupMessage] = useState(null); // State for popup message
  const [showPopup, setShowPopup] = useState(false); // State to show or hide the popup

  // Simulating backend response
  const handleCheckIn = () => {
    const isValidated = true; // Replace with actual backend response
    setPopupMessage(isValidated ? "Check-in validated!" : "Check-in failed.");
    setShowPopup(true);
  };

  const handleCheckOut = () => {
    const isValidated = false; // Replace with actual backend response
    setPopupMessage(isValidated ? "Check-out validated!" : "Check-out failed.");
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="space-x-4">
        <button
          onClick={handleCheckIn}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Check-In
        </button>
        <button
          onClick={handleCheckOut}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
        >
          Check-Out
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <p className="text-lg text-center font-semibold mb-4">
              {popupMessage}
            </p>
            <button
              onClick={closePopup}
              className="block mx-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckPopup;
