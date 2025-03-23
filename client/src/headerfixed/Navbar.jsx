import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'  

const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user)
    console.log("Current User:", currentUser);
  return (
    <div className='border-b border-neutral-500 mx-5'>
        <div className='flex justify-between items-center p-5 mx-w-6xl mx-auto '>
            <Link to='/'>
                <h1 className='text-2xl text-red-300 font-bold'>Auth</h1>
            </Link>
            <ul className='flex items-center space-x-5 text-white'>
            <Link to='/home'>
                <li className='cursor-pointer relative after:block after:h-0.5 after:bg-white after:transition-all hover:duration-100 after:w-0 hover:after:w-full'>Home</li>
            </Link>
            <Link to='/about'>   
                <li className='cursor-pointer relative after:block after:h-0.5 after:bg-white after:transition-all duration-100 after:w-0 hover:after:w-full'>About</li>
            </Link>
            <Link to='/profile'>
                { currentUser ?(
                    <img
                    src={currentUser.profilePicture}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
                    }}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  
                ):  (

                <li className='cursor-pointer relative after:block after:h-0.5 after:bg-white after:transition-all duration-100 after:w-0 hover:after:w-full'>Sign In</li>
                )}
            </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar