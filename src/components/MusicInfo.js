import React from "react";

const MusicInfo = ({ musicHeader, musicNickName, musicDescription, song }) => {
  return (
    <>
      <div className="w-full max-w-lg mx-auto my-8 px-4">
        {/* Div containing two spans and a p tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-100 text-xl mr-2">{musicHeader}</span>
            <span className="text-gray-100 font-medium text-lg">
              {musicNickName}
            </span>
          </div>
        </div>
        <p className="mt-2 text-gray-300">{musicDescription}</p>

        {/* Div containing a button, music icon, and a p tag */}
        <div className="flex items-center mt-4">
          <button className="px-4 py-1 rounded-md bg-gray-200 text-gray-700 font-medium mr-4">
            @Music
          </button>
          <span className="text-gray-600 text-2xl mr-4">🎶</span>
          <p className="text-gray-300">{song}</p>
        </div>
      </div>
    </>
  );
};

export default MusicInfo;
