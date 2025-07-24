import React, {  useRef, useEffect } from "react";
import './Navbar.css';
import { logout } from "../../../firebase";
import { Link } from "react-router-dom";


export default function Navbar(){

  const navRef = useRef();

useEffect(()=>{
     window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 80){
            navRef.current.classList.add('nav-dark')
        }else{
            navRef.current.classList.remove('nav-dark')
        }
     })
},[])


    return(
        <div>
            <nav className='Navbar' ref={navRef}>
                <div className="Navbar-left">
                    <img src="/logo.png" alt=""/>
                    <ul>
                      <li><Link to="/">Home</Link></li>  
                       <li><Link to="/tvshows">TV Shows</Link></li> 
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
               <div className="Navbar-right">
                    <img src="/search_icon.svg" className="icons" alt=""/>
                    <p>Children</p>
                    <img src="/bell_icon.svg"   className="icons" alt=""/>
                    <div className='Navbar-profile'>
                    <img src="/profile_img.png"  className="profile-img" alt=""/>
                    <img src="/caret_icon.svg" alt=""/>
                    <div className="dropdown">
                    <p onClick={logout}>Sign Out of Netflix</p>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}