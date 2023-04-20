import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";

import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import OptionModal from "./OptionModal";

const Kicks = () => {
  const videoList = useSelector((state) => state.videos.data);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-black flex ">
      <div className=" w-[30%] flex justify-center mt-48">
        <div className="text-white flex flex-col space-y-5 items-center">
          <span>Following</span>
          <span>Latest</span>
          <span>Trending</span>
        </div>
      </div>

      <div className="flex-grow w-[40%]">
        <div className=" flex-grow flex items-center justify-between space-x-4 px-2 py-4">
          <button onClick={handleOpen}>
            <CgOptions className="h-8 w-8 text-white rounded-full bg-gray-500 px-1 py-1 cursor-pointer" />
          </button>
          <OptionModal open={open} handleClose={handleClose} />
          <div className=" flex-grow">
            <form className="flex items-center bg-gray-200 rounded-lg px-2 py-1">
              <input
                className="bg-transparent focus:outline-none text-gray-800 flex-grow py-1"
                type="text"
                placeholder="Search"
              />
              <AiOutlineSearch size={20} />
            </form>
          </div>
          <AiOutlinePlus className="h-8 w-8 text-white rounded-full bg-gray-500 px-1 py-1 cursor-pointer" />
        </div>

        <div className="grid grid-cols-3 gap-3 bg-white rounded-lg shadow p-2 ">
          {videoList.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className=" w-[30%] "></div>
    </div>
  );
};

export default Kicks;
