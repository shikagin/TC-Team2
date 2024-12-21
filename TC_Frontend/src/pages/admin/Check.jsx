import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";
import axios from "axios";

function Check() {
  const webcamRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // Validated or Non-Validated

  // Function to capture the image
  const capture = (action) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);

    // Simulate backend validation logic
    const simulatedResult = action === "checkIn" ? "Validated" : "Non-Validated"; // Mock validation
    setResult(simulatedResult);

    if (simulatedResult === "Validated") {
      sendImage(imageSrc);
    }
  };

  // Function to send the image to the backend
  const sendImage = async (image) => {
    setLoading(true);
    try {
      const response = await axios.post("/your-backend-endpoint", {
        image,
      });
      console.log("Image sent successfully:", response);
      setLoading(false);
    } catch (error) {
      console.error("Error sending the image:", error);
      setLoading(false);
    }
  };

  // Function to reset for retaking the picture
  const retakePicture = () => {
    setImageUrl(null);
    setResult(null);
  };

  return (
    <div className="bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10">
      <div className="bg-white rounded-2xl h-full p-5 mb-5 flex flex-col w-full">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-2 text-center">Face Detection</h1>
        </div>

        <div className="flex flex-col justify-center items-center mb-6">
          {!imageUrl && !result && (
            <p className="text-base mb-4 text-gray-700">
              Please scan your face, center it in the frame, and click either "Check In" or "Check Out."
            </p>
          )}

          {!imageUrl && (
            <div className="relative w-full max-w-3xl h-60 mb-4">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-80 justify-self-center"
                videoConstraints={{ facingMode: "user" }}
              />
            </div>
          )}

          {imageUrl && (
            <img
              src={imageUrl}
              alt="Captured"
              className="w-80 h-60 object-cover mb-4"
            />
          )}

          {!imageUrl && !result && (
            <div className="flex space-x-4">
              <button
                onClick={() => capture("checkIn")}
                className="w-32 px-6 py-3 bg-blue-600 text-white rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              >
                Check In
              </button>
              <button
                onClick={() => capture("checkOut")}
                className="w-32 px-6 py-3 bg-blue-600 text-white rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              >
                Check Out
              </button>
            </div>
          )}

          {result && (
            <div
              className={`mt-4 px-4 py-2 rounded-lg text-white ${
                result === "Validated" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {result === "Validated" ? "Image Validated" : "Image Non Valid"}
            </div>
          )}

          {result === "Non-Validated" && (
            <button
              onClick={retakePicture}
              className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              Retake Picture
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Check;
