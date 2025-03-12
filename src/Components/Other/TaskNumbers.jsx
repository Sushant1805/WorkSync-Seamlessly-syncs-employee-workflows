import React from 'react'

const TaskNumbers = ({id,title,number}) => {
  return (
 
    <div id={id} className='bg-amber-300 w-80 rounded-2xl p-10'>
        <h1 className='text-3xl font-bold'>{number}</h1>
        <h2 className='text-xl font-medium'>{title}</h2>
     </div>
  )
}

export default TaskNumbers
