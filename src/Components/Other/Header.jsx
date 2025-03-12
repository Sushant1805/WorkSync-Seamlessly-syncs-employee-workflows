import React from 'react'

const Header = (props) => {
  const userLogOut = ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      //window.location.reload()
  }
  return (
   <>
        <div className='m-2 flex text-white items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello,<br /> <span className='font-semibold text-3xl'>{props.firstname} 👋</span> </h1>
        <button onClick={userLogOut} className='bg-amber-600 p-2 rounded-2xl w-25 h-10'>Log Out</button>
        </div>
   </>
  )
}

export default Header
