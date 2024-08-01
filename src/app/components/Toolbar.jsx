import React from 'react';
import { FaSearch, FaSync, FaShareAlt, FaRegStar, FaEllipsisH } from 'react-icons/fa';

const Toolbar = () => {
  return (
    <div className='flex w-full justify-end'>
    <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center justify-between w-5/6">
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <FaSync className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <FaShareAlt className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <FaRegStar className="text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <FaEllipsisH className="text-gray-600" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Toolbar;