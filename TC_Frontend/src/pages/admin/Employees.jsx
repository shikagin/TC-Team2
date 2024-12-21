import React, { useState } from 'react';
import Profilpic from '../../assets/Group.svg';
import Popup from "../../components/Popup";
import ModifyPopup from "../../components/ModifyPopup";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

function Employees() {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [isModifyPopupVisible, setIsModifyPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleModifyPopup = () => {
    setIsModifyPopupVisible(!isModifyPopupVisible);
  };

  const deleteEmployee = () => {
    // Add delete logic
  };

  const handleSave = (updatedEmployee) => {
    console.log("Updated Employee:", updatedEmployee);
    // Ajouter la logique pour mettre à jour l'employé
  };

  const fetchStates = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      console.log("Fetched Stats:", data);
      return data;
    } catch (error) {
      console.error("Error fetching states: ", error);
      return null;
    }
  };

  const employees = [
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
        <p className='font-bold text-2xl mb-2'> Employees list</p>
        <div className='overflow-y-auto h-[calc(100%-4rem)]'>
          {employees.map((item, index) => (
            <div key={index} className='flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>
              <div className='flex flex-row justify-between'>
                <img src={Profilpic} alt="pic" className='w-7 h-7 object-contain my-2 pr-2' />
                <p className='py-2'>{item.firstName} {item.lastName}</p>
              </div>
              <div className='flex flex-row space-x-4 place-items-center'>
                {/* Icon for Information */}
                <AiOutlineInfoCircle
                  className='text-{#191919} text-2xl cursor-pointer'
                  onClick={togglePopup}
                />
                {/* Icon for Modify */}
                <FiEdit
                  className='text-{#191919} text-2xl cursor-pointer'
                  onClick={toggleModifyPopup}
                />
                {/* Icon for Delete */}
                <MdDelete
                  className='text-color6 text-2xl cursor-pointer'
                  onClick={deleteEmployee}
                />
                {isPopupVisible && (
                  <Popup
                    isVisible={isPopupVisible}
                    onClose={() => togglePopup(null)} // Close popup
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

export default Employees;
