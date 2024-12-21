import React from 'react'

function TaskListRH() {
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
    const handleMissingData = (data) => {
        if (!data || data.length === 0) {
          console.warn("No data available.")
          return []
        }
        return data
    }

    const tasks = [
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
      {
        title: 'Tache1',
        description: '1ere tache a faire',
      },
    ]
    
  return (
      <div className='bg-[#F5F5F5] h-screen pl-72  pt-24 pr-14 pb-10 '>
        <div className='bg-white rounded-2xl h-full p-10 flex flex-col w-full'>
          <p className='font-bold text-2xl mb-2'>Tasks list</p>
          <div className='overflow-y-auto h-[calc(100%-4rem)]'>
            {tasks.map((item) => {
              return (
                <div className='flex flex-row justify-between mx-4 my-5 rounded-2xl bg-color2 py-2 px-4'>
                  <div className='flex flex-row justify-between'>
                    <p className='py-2 pr-8'>{item.title}</p>
                    <p className='py-2'>{item.description}</p>
                  </div>
                  <div className='flex flex-row justify-between w-2/3'>
                    <button className='px-4 py-1 rounded-xl bg-color1 text-white w-32'>Affect task</button>
                  </div>
                </div>
              );
            })}
          </div>
  
  
        </div>
  
      </div>
    )
}

export default TaskListRH