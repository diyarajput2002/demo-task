"use client"
import React, { useState } from 'react';
import { FaCog, FaQuestionCircle } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosNotifications } from "react-icons/io";
import { PiDotsNineLight } from "react-icons/pi";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <nav className="bg-blue-600 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-white mr-4" onClick={toggleSidebar}>
            <PiDotsNineLight className="h-6 w-10" />
          </button>
          <h1 className="text-white text-lg font-semibold">Finance and Operations</h1>
        </div>
        <div className="flex-grow relative justify-center flex mx-5">
          <input
            type="text"
            placeholder="Search for a page"
            className="w-1/2 items-center justify-center px-3 py-1 pl-8 rounded-sm"
          />
          <IoSearchOutline className="absolute left-[250px] rotate-90 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white mr-2">USMF</span>
          <button className="text-white mx-2">
            <IoIosNotifications className="h-6 w-6" />
          </button>
          <button className="text-white mx-2">
            <FaCog className="h-6 w-6" />
          </button>
          <button className="text-white mx-2">
            <FaQuestionCircle className="h-6 w-6" />
          </button>
          <div className="text-white bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
            AD
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;