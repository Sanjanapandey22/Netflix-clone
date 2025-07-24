import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';



export default function Home(){
     return(
        <div className='home'>
         <Navbar/>
         <div className='hero'>
          <img src="/Cover_title.jpg" className='banner-img' alt=""/>
          <div className='hero-caption'>
            <img src="/Cover_title.webp" className='caption-img'/>
            <p>As old players return and new alliances form, the deadliest game yet is about to begin.</p>

            <div className="hero-btns">
               <button className='btn'><img src='/play_icon.png' alt=""/>Play</button>
               <button className='btn dark-btn'><img src='/info_icon.png' alt=""/>More Info</button>
            </div>

            <TitleCards/>
          </div>
         </div>
         <div className="more-cards">
            <TitleCards  title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards  title={"Only on Netflix"} category={"popular"}/>
            <TitleCards  title={"Upcoming"}  category={"upcoming"}/>
            <TitleCards  title={"Top Pics for You"}  category={"now_playing"}/>
         </div>
         <Footer/>
        </div>
     )
}