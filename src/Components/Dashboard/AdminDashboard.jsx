import React, { useState } from "react";
import Header from "../Other/Header";

const AdminDashboard = (props ) => {
  const [title, setTitle] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [newTask, setnewTask] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newTask = ({title,description,category,
      active: false,
      new_task: true,
      completed: false,
      failed: false})

      const data = JSON.parse(localStorage.getItem('employees'))
      data.forEach(function(elem){
        if(assignTo == elem.firstname){
          elem.tasks.push(newTask)
          
        }
      })

      localStorage.setItem('employees',JSON.stringify(data))
      console.log(data)
      setAssignTo('')
      setCategory('')
      setDate('')
      setDescription('')
      setTitle('')
  };

  return (
    <div>
      <Header changeUser={props.changeUser} firstname={"Admin"} />
      <div className="flex items-center justify-center flex-row">
        <div className="w-screen flex bg-blue-950 rounded-2xl flex-col p-5 gap-5 mt-5 text-white">
          <form onSubmit={handleSubmit} className="flex flex-row gap-5 justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Task Title</h1>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-10 rounded-xl border border-gray-300 px-5"
                type="text"
                placeholder="Example: Make UI Design"
              />

              <h1 className="text-xl">Date</h1>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-10 rounded-xl border border-gray-300 px-5"
                type="date"
              />

              <h1 className="text-xl">Assign To</h1>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="h-10 rounded-xl border border-gray-300 px-5"
                type="text"
                placeholder="Employee Name"
              />

              <h1 className="text-xl">Category</h1>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design/Dev Etc"
                className="h-10 rounded-xl border border-gray-300 px-5"
              />
            </div>

            <div className="flex flex-col gap-1 m-5 p-5 justify-center">
              <h1 className="text-xl">Description</h1>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Task Description"
                className="h-40 w-80 rounded-xl border border-gray-300 px-5 py-2"
              />

              <button
                type="submit"
                className="bg-amber-50 h-10 rounded-2xl mt-2 text-black text-xl"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
