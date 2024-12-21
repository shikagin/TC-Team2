import React, { useState } from 'react';
import Profilpic from '../../assets/Group.svg';
import Popup from "../../components/Popup";
import ModifyPopup from "../../components/ModifyPopup";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

function HRs() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isModifyPopupVisible, setIsModifyPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleModifyPopup = () => {
    setIsModifyPopupVisible(!isModifyPopupVisible);
  };

  const handleSave = (updatedEmployee) => {
    console.log("Updated Employee:", updatedEmployee);
    // Ajouter la logique pour mettre à jour l'employé
  };

  const deleteHR = () => {
    // Add delete logic
  };

  const hrs = [
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
    {
      firstName: 'bsj ',
      lastName: 'nadine',
      phoneNumber: '036789900000',
      email: 'ssss@xxx.com',
      role: 'RH'
    },
  ]

  return (
    <div className='bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10'>
      <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
        <p className='font-bold text-2xl mb-2'>HRs List</p>
        <div className='overflow-y-auto h-[calc(100%-4rem)]'>
          {hrs.map((item, index) => (
            <div key={index} className='flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>
              <div className='flex flex-row items-center'>
                <img src={Profilpic} alt="Profile" className='w-7 h-7 object-contain my-2 pr-2' />
                <p className='py-2'>{item.firstName} {item.lastName}</p>
              </div>
              <div className='flex flex-row space-x-4 place-items-center'>
                <AiOutlineInfoCircle
                  className='text-black text-2xl cursor-pointer'
                  onClick={togglePopup}
                />
                <FiEdit
                  className='text-black text-2xl cursor-pointer'
                  onClick={toggleModifyPopup}
                />
                <MdDelete
                  className='text-color6 text-2xl cursor-pointer'
                  onClick={deleteHR}
                />
                {isPopupVisible && (
                  <Popup
                    isVisible={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)}
                    content={item}
                  />
                )}
                {isModifyPopupVisible && (
                  <ModifyPopup
                    isVisible={isModifyPopupVisible}
                    onClose={toggleModifyPopup}
                    content={item}
                    onSave={handleSave}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HRs;
