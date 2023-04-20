import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillReplyFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
const Comments = ({ allComments }) => {
  return (
    <div>
      <div className="bg-white h-72 rounded-md ml-1 w-[85%] overflow-y-scroll pb-2">
        {allComments.map(({ comment, date, name, photoUrl, time }) => (
          <div
            key={`${date} ${name}`}
            className="flex flex-row items-center pt-2 pl-1"
          >
            <img
              src={photoUrl}
              alt="User"
              className="rounded-full w-10 h-10 mr-2"
            />

            <div className="flex flex-col bg-gray-200 rounded-md p-1">
              <div>
                <span className="text-gray-800 font-medium text-sm mr-2">
                  {name}
                </span>
                <span className="text-gray-500 text-sm ">3hr ago</span>
              </div>

              <div className="flex  items-center justify-between w-56">
                <p className="text-gray-700 text-xs">{comment}</p>
                <div className="flex items-center space-x-1 ">
                  <span className="text-gray-500 text-xs">Like</span>
                  <span className="text-gray-500 text-xs">Share</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center ml-1 space-y-2">
              <FaThumbsUp className="text-gray-400" />
              <BsFillReplyFill className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 w-[82%] ml-3 ">
        <form className="flex items-center bg-gray-200 rounded-md px-2 ">
          <input
            className="bg-transparent focus:outline-none text-gray-800 flex-grow py-1 text-sm"
            type="text"
            placeholder="Search"
          />
          <RiSendPlaneFill size={16} />
        </form>
      </div>
    </div>
  );
};

export default Comments;
