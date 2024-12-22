import React from 'react'
import Popup from "../../components/Popup";
import Profilpic from '../../assets/Group.svg';
import{ useState } from "react";
import { FaInfoCircle, FaClock, FaChartBar} from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa';
import Attendence from '../../components/Attendence';


function ListEmploye() {

   const [employeeData, setemployeeData] = useState({

          firstName : '',
          lastName   : '',
          phoneNumber:'',
          email      :'',
          role       :'',
    });


    const [isPopupVisible, setIsPopupVisible] = useState(false);

   
    const togglePopup = (firstName, lastName, phoneNumber, email, role) => {

      setemployeeData({ firstName, lastName, phoneNumber, email, role });
      setIsPopupVisible(!isPopupVisible);
    };
     

    const [isAttendVisible, setIsAttendVisible] = useState(false);

    const [attendData, setattendData] = useState({

      WorkingDays: '',
      Leave:'',
      Overtime:'',
      Abscences:'',

    });

    const toggleAttend = (WorkingDays,Leave,Overtime, Abscences) => {

      setattendData({WorkingDays,Leave,Overtime, Abscences });
      setIsAttendVisible(!isAttendVisible);
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
      email      :'ssss@xxhhhhhhhhhx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12111111'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'121111'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
    { 
      firstName : 'bsj ',
      lastName   : 'nadine',
      phoneNumber:'036789900000',
      email      :'ssss@xxx.com',
      role       :'RH',
      WorkingDays: '12',
      Leave   :'2',
      Overtime:'12',
      Abscences:'12'
    },
   ]

  return (
    
      <div className='bg-[#F5F5F5] h-screen pl-72  pt-24 pr-14 pb-10 '>
        <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
           <p className='font-bold text-2xl mb-2'> Employee list</p>
           <div className='overflow-y-auto h-[calc(100%-4rem)]'>
           
           {employee.map((item, index) => {
              return (
                
                <div key={item.id} className='gap-3 flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>                  <div className='flex flex-row justify-between'> 
                       <img src={Profilpic} alt="pic" className='w-7 h-7 object-contain my-2 pr-2'/>
                    
                       <p className="mt-3" > {`Employee ${index + 1}`}  </p>
                </div >   
                  <div className='flex flex-row justify-between gap-1'>   
                  
                   <button className='px-2 py-1 rounded-xl bg-transparent text-black' onClick={() => togglePopup(item.firstName, item.lastName, item.phoneNumber, item.email, item.role)} >
                   <FaInfoCircle size={20} />
                  
                    </button>

                    <button className='px-2 py-1 rounded-xl bg-transparent text-black' onClick={() => toggleAttend(item.WorkingDays,item.Leave,item.Overtime,item.Abscences)}>
                      <FaClock size={20} />
                    </button>

                    <button className='px-2 py-1 rounded-xlb g-transparent text-black'>
                      <FaChartBar size={20} />
                    </button>

                                      
                    <button className='px-2 py-1 rounded-xl bg-transparent text-black'>
                      <FaRegCalendarCheck size={20} />
                    </button>
                    
                    {isPopupVisible && (
                    <Popup

                      isVisible={isPopupVisible}
                      onClose={() => togglePopup(null)} // Close popup
                      content={employeeData}
         
                    />
                    )} 

                    {isAttendVisible && (
                    <Attendence

                      isVisible={isAttendVisible}
                      onClose={() => toggleAttend(null)} // Close popup
                      content={attendData}
         
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