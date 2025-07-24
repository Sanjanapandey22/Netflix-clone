import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Home/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Tvshows from "./pages/Tvshows/Tvshows";
import Footer from "./components/Footer/Footer";
import TvShowsPage from "../TvShowsPage";


export default function App(){
  
  const navigate = useNavigate();

   useEffect(()=> {
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/')
      }else{
        console.log("Logged Out");
        navigate('/login')
      }
    })
   }, [])
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tvshows' element={<><Navbar /><TvShowsPage /><Footer /></>} />

        <Route path='/player/:id' element={<Player/>} />
  
      </Routes>
      
    </div>
  )
}