import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskLists/TaskList'

const EmployeeDashboard = ({data}) => {
  
  const [fname, setfname] = useState('')
  const [myTasks, setmyTasks] = useState('')
  useEffect(() => {
    setfname(data.firstname)
    setmyTasks(data.tasks)
  }, [data.tasks])
  
  return (
    <>
        <Header firstname={fname}/>
        <div className='flex justify-between gap-5 mt-10 '>
            <TaskNumbers id = {'amber'} title={'New Task'} number={data.task_numbers.new_task}/>
            <TaskNumbers id = {'blue'} title={'Active'}number={data.task_numbers.active}/>
            <TaskNumbers id = {'green'} title={'Completed'}number={data.task_numbers.completed}/>
            <TaskNumbers id = {'red'} title={'Failed'}number={data.task_numbers.failed}/>
        </div>
        <div id='task-list' className='h-[55%] w-full  mt-10 py-10 rounded-2xl flex items-center justify-start flex-nowrap gap-5 overflow-x-auto'>
            {data.tasks.map((e,k)=>{
              return <TaskList key={k} title={e.title} desc={e.description}/>
            })}
        </div>
        
        </>
   
  )
}

export default EmployeeDashboard
