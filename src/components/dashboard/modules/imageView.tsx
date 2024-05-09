import { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";

// const ImageView = ({ imageUrl }) => {
const ImageView = ({ imageUrl }: { imageUrl: string }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-auto h-auto overflow-hidden rounded-lg shadow-md">
        {isFullScreen ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="max-w-screen-lg">
              <img
                src={imageUrl}
                alt="Full Screen"
                className="mx-auto max-h-full max-w-full"
              />
              <button
                onClick={toggleFullScreen}
                className="absolute top-4 right-4 text-white focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              src={imageUrl}
              alt="Card Image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 cursor-pointer"
              onClick={toggleFullScreen}
            >
              <AiOutlineFullscreen className="text-white text-3xl" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageView;
