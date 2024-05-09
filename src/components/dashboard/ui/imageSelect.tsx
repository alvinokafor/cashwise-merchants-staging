import React, { useState } from 'react';
import { MdClose, MdCloudUpload } from 'react-icons/md';

const ImageUploadCard = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImageSrc(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   const file = event.dataTransfer.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImageSrc(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files[0];
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImageSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCancel = () => {
    setImageSrc(null);
  };

  return (
    <div
      className="bg-gray-200 p-24 rounded-lg border-1 font-semibold border-gray-300 relative"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {imageSrc ? (
        <div className="flex justify-center items-center h-full">
          <img src={imageSrc} alt="Uploaded" className="max-w-full max-h-full" />
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none"
            onClick={handleCancel}
          >
            <MdClose size={24} />
          </button>
        </div>
      ) : (
        <>
          <label htmlFor="uploadInput" className="flex bg-white shadow-md rounded-md p-1 items-center justify-center cursor-pointer">
            <MdCloudUpload className="mr-2" />
            Click or Drop &amp; Drop
          </label>
          <input
            id="uploadInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

export default ImageUploadCard;
