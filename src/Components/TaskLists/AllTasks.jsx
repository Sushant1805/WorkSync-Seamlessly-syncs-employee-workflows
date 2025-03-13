import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import AuthProvider from '../../Context/AuthProvider'
const AllTasks = () => {
  
  const data = useContext(AuthContext)
  console.log(data[0].employees)
  return (
    <>
   
    <div id='all-task-list'className='bg-[#272626] text-white  rounded-2xl mt-5 w-full flex flex-col h-50'>
    <div className='flex font-bold justify-between h-5 items-center p-5 m-3 rounded-2xl bg-amber-300 '>
        <h2 className='w-1/5'>Employee Name</h2>
        <h2 className='w-1/5'>New Task</h2>
        <h3 className='w-1/5'>Active Task</h3>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
      <div id='all-task-list' className=' overflow-y-auto'>
        {
          data[0].employees.map(function(elem,k){
            return <div key={k} className='flex justify-between h-5 items-center p-5 m-3 rounded-2xl bg-blue-300 '>
            <h2 className='w-1/5'>{elem.firstname}</h2>
            <h3 className='w-1/5'>{elem.task_numbers.new_task}</h3>
            <h5 className='w-1/5'>{elem.task_numbers.active}</h5>
          <h5 className='w-1/5'>{elem.task_numbers.completed}</h5>
          <h5 className='w-1/5'>{elem.task_numbers.failed}</h5>
          </div>
          })
        }
      
      </div>
    </div>
    </>
    
  )
}

export default AllTasks
