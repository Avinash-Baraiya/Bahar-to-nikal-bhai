import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { MdTravelExplore } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <MdTravelExplore size={30} className=" text-sky-600 mr-2" />
        <h1 className="text-xl dont bold text-gray-700">Bahar To nikal Bhai</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className=" text-sky-600 mr-2" />
          <p className="text-sm text-gray-800">8AM - 6PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className=" text-sky-600 mr-2" />
          <p className="text-sm text-gray-800">123-456-7890</p>
        </div>
        <button>Get a Free Qutote</button>
      </div>
    </div>
  );
};

export default Topbar;
