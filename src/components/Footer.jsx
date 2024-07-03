import React from 'react';
import { BsFillLuggageFill } from 'react-icons/bs';
import { MdTravelExplore } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1148px] w-full py-8 m-auto border-t-4">
      <div className='flex items-center justify-center'>
        <MdTravelExplore size={30} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>Bahar To nikal Bhai</h1>
      </div>
    </div>
  );
};

export default Footer;