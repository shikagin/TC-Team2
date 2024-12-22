import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import Description from '../../components/Description';
import Add from '../../components/Add';
import { BiPlus } from 'react-icons/bi';
import CreateTask from '../../components/CreateTask';

function TaskList() {

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
    const [descriptionData, setDescriptionData] = useState({
      title: '',
      description: '',
    });
    
    const toggleDescription = (title, description) => {
      setDescriptionData({ title, description });
      setIsDescriptionVisible(!isDescriptionVisible);
    };
     
      
  
    const [isAddVisible, setIsAddVisible] = useState(false);
        
          const toggleAdd = () => {
        
              setIsAddVisible(!isAddVisible);
        
          };
  
    const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
        
          const toggleAddTask = () => {
        
              setIsAddTaskVisible(!isAddTaskVisible);
        
          };
  
      
    // Mock tasks initialization
   
    const tasks =[
  
        { id: 1, title: 'Task 1', status: 'Not Started', description: 'Task 1 jhjsdhrrrrrrrrrrrrrvkhdkjvhdhvkjh vsjhjkhjkhkcjvhjfhuhjhjkhjkdhvjkfhjhvfdescription' },
        { id: 2, title: 'Task 2', status: 'In Progress', description: 'Task 2 descriprrrrrrrtion' },
        { id: 3, title: 'Task 3', status: 'Not Started', description: 'Task 3 description' },
  
    ];
  
  
    // Handle status change directly in tasks
    const handleStatusChange = (id, newStatus) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    };

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

  const handleMissingData = (data) => {
    if (!data || data.length === 0) {
      console.warn("No data available.")
      return []
    }
    return data
  }

  return (
    <div className="bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10">
        <div className="bg-white rounded-2xl h-full p-10 flex flex-col w-full">

          <p className="font-bold text-2xl mb-2 font-roboto ml-4">Tasks List</p>
           
       
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {/* Header Row */}
            <div className="pb-4 pt-4 flex flex-row justify-between items-center pl-4 pr-4 rounded-xl border-b-color5 border-b-2 bg-color2 w-full">
              <p className="pr-[1.5vw] text-[1.2vw] font-inter font-bold border-r-2 border-r-color5 flex-1 min-w-[10%]">
                Task
              </p>
              <p className="px-[1.5vw] text-[1.2vw] font-inter font-bold border-r-2 border-r-color5 flex-[2] min-w-[20%]">
                Task Description
              </p>
              <p className="px-[1.5vw] text-[1.2vw] font-inter font-bold border-r-2 border-r-color5 flex-1 min-w-[15%]">
                Deadline
              </p>
              <p className="pl-[1.5vw] text-[1.2vw] font-inter font-bold flex-1 min-w-[15%]">
                Task Status
              </p>
            </div>
  
            {/* Task Rows */}

            {tasks.map((task) => (
              
              <div

                key={task.id}

                className="pb-4 pt-4 flex flex-row justify-between ml-8 rounded-xl bg-white"  >
                <div className="flex flex-row items-center justify-between w-full py-2 px-4 bg-white rounded-lg shadow-sm">

                    <div className="flex flex-row  flex-1">
                      <p className="text-[1rem] font-inter font-medium truncate  mr-16">
                        {task.title}
                      </p>
                      <button
                        className="flex ml-16 items-center justify-center text-gray-700 bg-transparent hover:bg-gray-100 rounded-lg p-2"
                        onClick={() => toggleDescription(task.title, task.description)}
                      >
                        <FiMenu size={24} className="text-black" />
                      </button>
                    </div>

                    <p className="text-[1rem] mr-24 text-gray-700 font-medium pr-8 whitespace-nowrap">
                      Deadline
                    </p>


                    <select

                      
                      value={null}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      className="p-2 border border-gray-300 rounded-lg text-[1rem] bg-white shadow-sm"
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Finished">Finished</option>
                    </select>
                </div>
                              

                {isDescriptionVisible && (

                <Description
                  isVisible={isDescriptionVisible}
                  onClose={() => toggleDescription(null)} // Close popup
                  content = {descriptionData} 
                />
                )} 

              </div>
            ))}


          </div>
        </div>
      </div>
  )

}

export default TaskList