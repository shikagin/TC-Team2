import React from 'react'
import Profilpic from '../../assets/Group.svg';

function HRs() {
  const fetchStates = async () => {
    try {
      const response = await fetch("")
      const data = await response.json()
      console.log("Fetched Stats:", data)
      return data

    }
    catch (error) {
      console.error("err fetching states ", error)
      return null

    }
  }

  const hrs = [
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
    {
      name: 'bsj nadine',
    },
  ]

  return (
    <div className='bg-[#F5F5F5] h-screen pl-72  pt-24 pr-14 pb-10 '>
      <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
        <p className='font-bold text-2xl mb-2'> HRs list</p>
        <div className='overflow-y-auto h-[calc(100%-4rem)]'>
          {hrs.map((item) => {
            return (
              <div className='flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>
                <div className='flex flex-row justify-between'>
                  <img src={Profilpic} alt="pic" className='w-7 h-7 object-contain my-2 pr-2' />
                  <p className='py-2'>{item.name}</p>
                </div>
                <div className='flex flex-row justify-between w-2/3'>
                  <button className='px-4 py-1 rounded-xl bg-color1 text-white w-32'>Informations</button>
                  <button className='px-4 py-1 rounded-xl bg-color1 text-white w-32'>Modify</button>
                  <button className='px-4 py-1 rounded-xl bg-color6 text-white w-32'>Delete</button>
                </div>

              </div>
            );
          })}
        </div>


      </div>

    </div>
  )
}

export default HRs