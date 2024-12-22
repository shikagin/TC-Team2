import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from "../assets/profilePic.svg";
import ProfilePopup from './ProfilePopup';

const TopBar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const employee = {
    firstName: 'Rania',
    lastName: 'Zitouni',
    phoneNumber: '0540911619',
    email: 'mr_zitouni@esi.dz',
    role: 'RH',
    profilePic: '', // Path to the employee's profile picture
  };

  return (
    <div className='fixed top-0 left-0 w-full h-20 border-b-2 border-gray-200 z-10 flex justify-end'>
      <div className='flex flex-row items-center'>
        {/* Profile Picture - Clickable */}
        <img
          src={profilePic}
          alt="profile picture"
          className='w-12 h-12 object-cover rounded-full cursor-pointer'
          onClick={togglePopup} // Toggle popup visibility
        />
        {/* Employee Info */}
        <div className='flex flex-col p-5 pt-3'>
          <p className='font-bold text-xl'>{employee.firstName} {employee.lastName}</p>
          <p className='text-base'>{employee.role}</p>
        </div>
        {/* Popup */}
        {isPopupVisible && (
          <ProfilePopup
            isVisible={isPopupVisible}
            onClose={togglePopup} // Close popup
            content={{
              profilePic: employee.profilePic,
              firstName: employee.firstName,
              lastName: employee.lastName,
              email: employee.email,
              phoneNumber: employee.phoneNumber,
              role: employee.role,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TopBar;
