import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logot.png";
import { AuthContext } from "../../Pages/Authentication/AuthProvider";
import img from '../../Assets/login/profile.png';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }

    const menuItems = <>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/service'>Services</Link></li>
        <li><Link to = '/blogs'>Blogs</Link></li>
        
        {
              user?.email?
              <div className="flex">
              <li><Link to = '/addservice'>Add Services</Link></li>
              <li><Link to = '/review'>My Review</Link></li>
              <li onClick ={handleLogOut}><Link to="/service">Log Out</Link></li>
              </div>
              
              : <li><Link to = '/login'>LogIn</Link></li>
        }
        <li><Link to = '/signup'>Sign Up</Link></li>
        
    </>
  return (
    <div className="navbar bg-white border-b-8 border-b-cyan-400 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-cyan-100 hover:text-sky-600"
          >
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt="" className="w-14 rounded-3xl" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 hover:bg-cyan-100 hover:text-sky-600">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {
          user?.photoURL ? <img src={user.photoURL} alt=""/> : <img src={img}  alt=""/>
        }
          
        </div>
      </label>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Header;
