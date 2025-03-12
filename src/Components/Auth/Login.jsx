import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    function SubmitHandler(e){
        e.preventDefault();
        handleLogin(Email,Password)
        setEmail("")
        setPassword("")
    }

  return (
    <>
    <div className='flex h-screen items-center justify-center bg-[#1C1C1C]'>
        <div className='flex flex-col w-150 bg-emerald-400  items-start gap-4 rounded-2xl p-15 ml-15'>
            <h1 className='font-bold text-2xl '>Welcome</h1>
            <h1 className='text-gray-700'>Please Provide Your Information</h1>
                <form onSubmit={SubmitHandler}>
                <p className='mt-2'>Email:</p>
                <input
                value={Email} 
                required type="email"
                className='w-60 border-1 border-black-300 outline-0 h-10 rounded-xl p-5 mt-4'
                placeholder='Enter Your email'
                onChange={(e)=>{ setEmail(e.target.value)}} 
                />
                <p className='mt-2'>Password:</p>
                <input
                value={Password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required type="Password"
                className='w-60 border-1 border-black-300 outline-0 h-10 rounded-xl p-5 mt-2'
                placeholder='Enter Your Password' 
                />

                <button className='bg-amber-600 rounded-xl  w-35 h-10 text-white block mt-5'>Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
