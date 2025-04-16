import React, { useEffect,useState,useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import AllTasks from './Components/TaskLists/AllTasks'
import { setLocalStorage,getLocalStorage } from './Utils/LocalStorage'
import AuthProvider, { AuthContext } from './Context/AuthProvider'
import CommentsSection from './Components/TaskLists/CommentsSection'




const App = ()=>{
  const h1 = {
    color : "Red",
    backgroundColor: "Blue"
  }
  let a = "Hello";
  const [user, setuser] = useState(null)
  const [loggedUserData, setloggedUserData] = useState(null)
  const [authData,setData] = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
        setuser(userData.role)
        setloggedUserData(userData.data)
    }
  }, [])
  
  const handleLogin = (email,password)=>{
      if(email == 'admin@example.com' && password=='123'){
        setuser('Admin')
        localStorage.setItem("loggedInUser",JSON.stringify({role:'Admin'}))
      }else if(authData){
        const employee = authData.employees.find((e)=>email == e.email && password == e.pass)
        if(employee){
          setuser('Employee')
          setloggedUserData(employee)
        }
        localStorage.setItem("loggedInUser",JSON.stringify({role:'Employee'}))
      }
  }
  
  
  return (
    <>
{!user && <Login handleLogin={handleLogin} />}

{user === 'Admin' && (
    <div className='bg-[#1C1C1C] h-screen p-10'>
        <AdminDashboard changeUser={setuser}/>
        <AllTasks />
    </div>
)}

{user === 'Employee' && (
    <div className='bg-[#1C1C1C] h-screen p-10'>
        <EmployeeDashboard changeUser={setuser} data={loggedUserData}/>
    </div>
)}

   
   
   
  
    </>
  )

}
export default App
