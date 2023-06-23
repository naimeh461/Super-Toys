import { Link, NavLink } from "react-router-dom";
import logo from "../../public/superToy.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
    return (
        <div>
        <div className="navbar blue-primary text-primary-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="none"  viewBox="0 0 24 24" stroke="currentColor" >
                  <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </label>
              <ul tabIndex="0"  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li > <NavLink to="/" className={({isActive}) => (isActive ? "active" : "default")}>Home</NavLink></li>
                <li > <NavLink to="/blog" className={({isActive}) => (isActive ? "active" : "default")}>Blog</NavLink></li>
              </ul>
            </div>
            <Link  className="btn btn-ghost normal-case text-xl flex gap-3 justify-center items-center ">
              <img className="w-10 " src={logo} alt="" />
              <p className="text text-2xl font-bold italic">Super Toy</p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 p-0 gap-3">
              <li> <NavLink to="/" className={({isActive}) => (isActive ? "active btn" : "default ")}>Home</NavLink></li>
              
              {user ? <>
              <li><NavLink to="/myToys" className={({isActive}) => (isActive ? "active btn" : "default")}>My Toys</NavLink></li>
              <li><NavLink to="/addtoy" className={({isActive}) => (isActive ? "active btn" : "default")}>Add A Toy</NavLink></li>
              </> : <li><NavLink to="/register" className={({isActive}) => (isActive ? "active" : "default")}>Register</NavLink></li>
              }
              <li><NavLink to="/blog" className={({isActive}) => (isActive ? "active btn" : "default")}>Blog</NavLink></li>
              <li><NavLink to="/allToy" className={({isActive}) => (isActive ? "active btn" : "default")}>All Toys</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
          <label >
            <div className="w-14  btn btn-ghost btn-circle">
          
              { user ? <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <img className="rounded-full"src={user.photoURL} />
              </div> :<></>}
              </div>
          </label>
              <div >
              { user ?
                    <button className="btn bg-white text-primary ml-4 mr-2" onClick={handleLogOut}>Log Out</button>:
                    <Link to="/login"><button className="btn  bg-white text-primary  mr-2">Login</button></Link>
              }
              </div>
              
          </div>
          
        </div>
      </div>
    );
};

export default NavBar;