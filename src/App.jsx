import React, { useState, useEffect } from "react";
// Import the image from src
import srcImage from "./Images/image.png";

const ImageDisplay = () => {
  useEffect(() => {
    document.title = "23BCE1203";
  }, []);
  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <h1 className="text-2xl font-bold mb-6">React Image Display Example</h1>

      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Image from src/image folder</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img
            src={srcImage}
            alt="Image from src folder"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Image from public/images folder
        </h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img
            src="/Images/image.jpg"
            alt="Image from public folder"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
