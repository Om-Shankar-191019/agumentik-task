import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineEye } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { BsPlayCircle } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import {
  RiVolumeMuteFill,
  RiHeartFill,
  RiChat1Fill,
  RiShareForwardFill,
} from "react-icons/ri";
import MusicInfo from "./MusicInfo";
import Comments from "./Comments";

const Reel = () => {
  const reel = useSelector((state) => state.videos.currentReel);
  const {
    thumbnail,
    following,
    userPhoto,
    userName,
    views,
    likes,
    musicHeader,
    musicNickName,
    musicDescription,
    song,
    comments,
  } = reel;
  return (
    <div className=" bg-black flex h-screen ">
      <div className=" w-[30%] flex justify-center  relative">
        <div className="text-white flex flex-col space-y-5 items-center mt-48">
          <span className={`${following ? "bg-red-400 rounded-md p-2" : ""} `}>
            Following
          </span>
          <span>Latest</span>
          <span>Trending</span>
          <div className="flex space-x-2">
            <AiOutlineSearch
              className="h-8 w-8 text-white rounded-full bg-gray-500 px-1 py-1 cursor-pointer"
              size={20}
            />
            <AiOutlinePlus
              className="h-8 w-8 text-white rounded-full bg-gray-500 px-1 py-1 cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <button className="ml-12 mb-24">
          <FaArrowLeft className="h-8 w-8 text-white rounded-full bg-gray-500 p-2 cursor-pointer" />
        </button>
      </div>

      <div className="flex-grow w-[40%]">
        <div className="relative w-full h-full overflow-hidden">
          {/* Main image */}
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt="Video thumbnail"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full text-white font-bold shadow-lg p-4">
            <BsPlayCircle size={45} />
          </button>

          {/* User info */}
          <div className="absolute top-0 left-0 flex items-center p-2">
            <img
              src={userPhoto}
              alt="User"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">{userName}</span>
              <span className="ml-2 text-white opacity-75">
                <AiOutlineEye
                  className="inline-block align-middle mr-1 "
                  size={20}
                />
                {views}
              </span>
            </div>
          </div>

          {/* Options menu */}
          <div className="absolute top-1 right-0 p-2">
            <SlOptionsVertical className="text-white" />
          </div>

          {/* Action buttons */}
          <div className="absolute bottom-0 right-0 flex flex-col items-center p-2  ">
            <button className="flex flex-col items-center text-white mb-2">
              <div className="bg-white p-2 mb-1 rounded-full">
                <RiVolumeMuteFill className="text-xl text-gray-700  " />
              </div>
              <span className="text-sm">Mute</span>
            </button>
            <button className="flex flex-col items-center text-white mb-2">
              <div className="bg-white p-2 mb-1 rounded-full">
                <RiHeartFill className="text-xl text-gray-700  " />
              </div>
              <span className="text-sm">{`${likes} likes`}</span>
            </button>
            <button className="flex flex-col items-center text-white mb-2">
              <div className="bg-white p-2 mb-1 rounded-full">
                <RiChat1Fill className="text-xl text-gray-700  " />
              </div>
              <span className="text-sm">comments</span>
            </button>
            <button className="flex flex-col items-center text-white mb-2">
              <div className="bg-white p-2 mb-1 rounded-full">
                <RiShareForwardFill className="text-xl text-gray-700  " />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[30%] flex flex-col justify-center ">
        <MusicInfo
          musicHeader={musicHeader}
          musicNickName={musicNickName}
          musicDescription={musicDescription}
          song={song}
        />
        <button className="absolute top-1/2 right-px transform  -translate-y-1/2 rounded-full text-white font-bold shadow-lg p-4">
          <FaArrowRight className="h-8 w-8 text-white rounded-full bg-gray-500 p-2 cursor-pointer" />
        </button>
        {comments.length && <Comments allComments={comments} />}
      </div>
    </div>
  );
};

export default Reel;
