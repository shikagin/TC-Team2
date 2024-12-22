import React ,{ useState} from 'react'
import { IoIosRadioButtonOn } from "react-icons/io";

function Attendance() {

         



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

      const employee = 
      { 
        WorkingDays: '12',
        Leave   :'2',
        Overtime:'12',
        Abscences:'12111111'
      }
      

      
      return (

        <div className="bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10">
            <div className="bg-white rounded-2xl h-full p-10 flex flex-col w-full">
             <div className="flex items-center justify-start mb-4">
                        <IoIosRadioButtonOn className="text-green-500 mr-2 text-lg" />
                         <h2 className="text-lg font-bold">Attendance</h2>
              </div>
             {/* Form */}
            <form className="space-y-8">

            {/* WorkingDays*/}
            <div className="flex gap-3 pl-4 pt-2 pb-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">

              <p>Working Days</p>
              <p className='ml-8'>{employee.WorkingDays}</p>

            </div>

            {/* Leave*/}
            <div className="flex gap-30 pl-4 pt-2 pb-2  bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">

              <p > Leave </p>
              <p className='ml-8 gap-30 '>{ employee.Leave}</p>
            </div>


            {/* Overtime*/}
            <div className="flex gap-3 pl-4 pt-2pb-2  items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">

              <p>Overtime</p>
              <p className='ml-8'>{employee.Overtime}</p>

            </div>


            {/*  Abscences*/}
            <div className="flex gap-3 pl-4 pt-2 pb-2 items-center bg-[#E3EDF9] text-[#4D587F] h-[6vh] rounded-[6px]">

              <p>Abscences</p>
              <p className='ml-8'>{employee.Abscences}</p>

            </div>

            
          
            </form>
          </div>
        </div>

  )
}

export default Attendance