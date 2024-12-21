import React from 'react'
import Popup from "../../components/Popup";
import Profilpic from '../../assets/Group.svg';
import{ useState } from "react";
import CreateAccount from '../../components/CreateAccount';

function ListEmploye() {


    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {

      setIsPopupVisible(!isPopupVisible);

    };

    const fetchStates= async ()=>{

        try{

                const response = await fetch("")
                const data = await response.json()
                console.log("Fetched Stats:", data)
                return data

        }
        catch (error)
        {
                console.error("err fetching states ",error)
                return null

        }
    }
    
   const employee = [
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH'
    },
   ]

  return (
    <div className='bg-[#F5F5F5] h-screen pl-72  pt-24 pr-14 pb-10 '>
        <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
           <p className='font-bold text-2xl mb-2'> Employee list</p>
           <div className='overflow-y-auto h-[calc(100%-4rem)]'>
           {employee.map((item) => {
              return (
                <div key={item.id} className='flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>                  <div className='flex flex-row justify-between'> 
                     <img src={Profilpic} alt="pic" className='w-7 h-7 object-contain my-2 pr-2'/>
                     <p className='py-2'>{item.name}</p>
                  </div>

                  <div className='flex flex-row justify-between w-2/3'>            
                    <button  className='px-4 py-1 rounded-xl bg-color1 text-white'  onClick={togglePopup}  >informations</button>
                    <button  className='px-4 py-1 rounded-xl bg-color1 text-white'>hours</button>
                    <button  className='px-4 py-1 rounded-xl bg-color1 text-white'>statistics</button>
                    <button  className='px-4 py-1 rounded-xl bg-color6 text-white'>leave request</button>
                 
                    {isPopupVisible && (
                    <Popup

                      isVisible={isPopupVisible}
                      onClose={() => togglePopup(null)} // Close popup
                      content={item}
         
                    />
                    )} 


                  </div>

                  
                   
                </div>
              );
            })}
           </div>
          

        </div>
        
    </div>
  )
}

export default ListEmploye