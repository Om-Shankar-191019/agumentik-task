import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { CiStreamOn } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import logoU from "../assets/logoU.png";

import { MdMenu, MdPerson } from "react-icons/md";
import { FaCog, FaBell } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";

const NAV_LINKS = [
  {
    id: 1,
    icon: <FaUserFriends className="h-5 w-5" />,
    name: "Friends",
  },
  {
    id: 2,
    icon: <IoIosChatboxes className="h-5 w-5" />,
    name: "Chats ",
  },
  {
    id: 3,
    icon: <CiStreamOn className="h-5 w-5" />,
    name: "U-Stream",
  },
  {
    id: 4,
    icon: <FaUserCheck className="h-5 w-5" />,
    name: "Interests",
  },
  {
    id: 5,
    icon: <AiFillNotification className="h-5 w-5" />,
    name: "Notifications",
  },
];

const FEATURES = [
  {
    id: 1,
    icon: <GiBurningTree className="h-8 w-8" />,
    name: "Roots",
    description: "Connect Friends",
  },
  {
    id: 2,
    icon: <MdOutlineWatchLater className="h-8 w-8" />,
    name: "Kicks",
    description: "Short Videos",
  },
  {
    id: 3,
    icon: <SlCalender className="h-8 w-8" />,
    name: "U-Meet",
    description: "Create Events",
  },
];

const Header = () => {
  return (
    <>
      <div className="shadow-lg shadow-gray-300">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <img src={logoU} alt="Logo" className="h-10 w-10 " />
            <div className="ml-4 flex-grow">
              <form className="flex items-center bg-gray-200 rounded-lg px-2 py-1">
                <input
                  className="bg-transparent focus:outline-none text-gray-800 flex-grow py-1"
                  type="text"
                  placeholder="Search"
                />
                <AiOutlineSearch size={20} />
              </form>
            </div>
          </div>

          <div className="hidden md:flex space-x-2 ">
            {FEATURES.map((item) => (
              <a
                href="#"
                key={item.id}
                className="flex items-center px-4 py-2 bg-gray-400 hover:bg-gray-200 rounded-md duration-300"
              >
                <div className="mr-2">{item.icon}</div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs font-light">{item.description}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="hidden md:flex ">
            {NAV_LINKS.map((navLink) => (
              <a
                href="#"
                key={navLink.id}
                className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-md"
              >
                <div className="flex flex-col items-center">
                  <div className="mr-2">{navLink.icon}</div>
                  <span className="text-gray-500">{navLink.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col  items-center">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="User Avatar"
              className="rounded-full w-9 h-9 "
            />
            <FaChevronDown className="text-gray-600 h-3 w-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
