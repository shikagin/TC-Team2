// src/components/FaceDetection.js
import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    // Load face-api.js models
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      setIsModelLoaded(true);
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (isModelLoaded && videoRef.current) {
      const video = videoRef.current;

      // Start the video stream
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam:", err));

      // Detect faces in the video stream
      const detectFace = async () => {
        const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
        canvasRef.current?.clear();
        faceapi.matchDimensions(canvasRef.current, video);
        const resizedDetections = faceapi.resizeResults(detections, video);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      };

      // Continuously detect faces
      const interval = setInterval(detectFace, 100);
      return () => clearInterval(interval);
    }
  }, [isModelLoaded]);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        style={{ width: "100%", height: "auto" }}
        autoPlay
        muted
        onPlay={() => console.log("Video playing")}
      />
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default FaceDetection;
