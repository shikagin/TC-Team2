import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import Description from '../../components/Description';
import Add from '../../components/Add';
import { BiPlus } from 'react-icons/bi';
import CreateTask from '../../components/CreateTask';
const TaskListRH = () => {

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

      { id: 1, title: 'Task 1', status: 'Not Started', description: 'Task 1 jhjsdhvkhdkjvhdhvkjh vsjhjkhjkhkcjvhjfhuhjhjkhjkdhvjkfhjhvfdescription' },
      { id: 2, title: 'Task 2', status: 'In Progress', description: 'Task 2 description' },
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

 
  
    return (
      <div className="bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10">
        <div className="bg-white rounded-2xl h-full p-10 flex flex-col w-full">

          <p className="font-bold text-2xl mb-2 font-roboto ml-4">Tasks List</p>
          <button className="px-4 py-2 rounded-full mb-2 bg-black text-white flex w-[4vw] ml-auto " onClick={toggleAddTask}  >
              <BiPlus size={24} className="ml-auto" />

          </button>

          {isAddTaskVisible && (

          <CreateTask

            isVisible={isAddTaskVisible}
            onClose={() => toggleAddTask(null)} // Close popup
            
          />
          )} 
       
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {/* Header Row */}
            <div className="pb-4 pt-4 flex flex-row justify-between pl-4 rounded-xl border-b-color5 border-b-2 bg-color2">
              <p className="pr-16 font-inter font-bold border-r-color5 border-r-2">Task</p>
              <p className="pr-16 font-inter font-bold border-r-color5 border-r-2">Task Description</p>
              <p className="pr-16 font-inter font-bold border-r-color5 border-r-2">Employee</p>
              <p className="pr-16 font-inter font-bold border-r-color5 border-r-2">Deadline</p>
              <p className="pr-16 font-inter font-bold">Task Status</p>
            </div>
  
            {/* Task Rows */}

            {tasks.map((task) => (
              
              <div

                key={task.id}

                className="pb-4 pt-4 flex flex-row justify-between pl-4 rounded-xl bg-white"  >

                <div className="flex flex-row">

                  <p className="mr-16 font-inter font-medium">{task.title} </p>

                  <button
                    className="ml-24 flex items-center text-gray-700 bg-transparent hover:bg-gray-100 rounded-lg" onClick={() => toggleDescription(task.title, task.description)}  
                  >

                    <FiMenu size={24} className="text-black" />
                  </button>

                 
                </div>
  
                <div className="flex flex-row justify-between items-center">
                  <button className="ml-16 rounded-xl bg-transparent text-black w-10 h-10 flex items-center justify-center" onClick={toggleAdd}>
                    <FaUserPlus size={20} />
                  </button>

                {isAddVisible && (

                <Add

                  isVisible={isAddVisible}
                  onClose={() => toggleAdd(null)} // Close popup
                  
                />
                )} 

                 {isDescriptionVisible && (

                  <Description
                    isVisible={isDescriptionVisible}
                    onClose={() => toggleDescription(null)} // Close popup
                    content = {descriptionData} 
                  />
                  )} 


                </div>
  
                <p className="pr-16">Deadline</p>
                <select 
                  value={task.status}
                 // onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  className="mr-8 p-2 border border-gray-300 rounded-lg"
                >
                  {/* <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Finished">Finished</option> */}
                </select>

              </div>
            ))}


          </div>
        </div>
      </div>
    );
  };
  
  export default TaskListRH;