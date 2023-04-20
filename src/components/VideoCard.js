import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentReel } from "../features/slices/videoSlice";

const VideoCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpenReel = () => {
    dispatch(updateCurrentReel(item));
    navigate("/reel");
  };
  return (
    <>
      <div
        onClick={handleOpenReel}
        className="relative w-full  bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
      >
        <img
          className="w-full h-48 object-cover"
          src={item.thumbnail}
          alt="Video thumbnail"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full text-white font-bold shadow-lg p-4">
          <BsPlayCircle size={40} />
        </button>

        <div className="absolute bottom-0 right-0  text-white p-2 rounded-bl-lg">
          <span>{item.duration}</span>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
