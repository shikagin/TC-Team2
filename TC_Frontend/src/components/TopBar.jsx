import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from "../assets/profilePic.svg";

const TopBar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const openSettings = () => {
    console.log('Opening settings...');
  };

  return (
    <div className='fixed top-0 left-0 w-full h-20 border-b-2 border-gray-200 z-10 flex justify-end'>
      <div className='flex flex-row w-56'>
        <img src={profilePic} alt="profile picture" className='w-12 object-contain'/>
        <div className='flex flex-col p-5 pt-3'>
          <p className='font-bold text-xl'>Zitouni Rania</p>
          <p className='text-base'>HR manager</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
