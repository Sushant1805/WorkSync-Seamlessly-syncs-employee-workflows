import React from 'react'

const TaskList = ({title,desc}) => {

  return (
    <div className='h-full w-[300px] bg-[#273db4] rounded-2xl flex-shrink-0'>
        <div className='flex justify-between items-center py-5 px-5'>
            <h1 className='bg-red-700 text-md text-white px-2 py-1 rounded-md '>High</h1>
            <p className='text-sm font-semibold text-white'>20 Feb 2024</p>
            
      </div> 
        <div className='m-5 mt-0'>
        <h1 className='text-xl font-bold h-15'>{title}</h1>
        <p className='mt-2 text-md font-medium'>{desc}</p>
      </div>
      <div className='flex flex-row m-2 justify-between'>
      <button className='bg-green-500 rounded-md m-2 h-10 text-xs py-1 px-2 font-semibold'>Mark As Completed</button>
      <button className='bg-red-500  rounded-md m-2 h-10 text-xs py-1 px-2 font-semibold'>Mark As Failed</button>
      </div>
    </div>
  )
}

export default TaskList
