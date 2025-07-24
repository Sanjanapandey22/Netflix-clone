import React, { useRef, useState, useEffect } from "react";
import './Tvshows.css'

export default function Tvshows({title, category}){
    const [apiData, setApiData] = useState([]);

   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMzYWNiNGJkYjBhMTJmZWMyM2RhOWQ3ZDg5ZWVkYSIsIm5iZiI6MTc1MzE2OTM1Ny40MTUsInN1YiI6IjY4N2YzZGNkZGFhODY5ZWQ2NTE2YThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8c21ShVzFEIoz-ke-620tmFrur9uwYYjTJ2kO43CuaY'
  }
};
   
 const cardsRef = useRef();

    const  handlewheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };


useEffect(()=> {
fetch(`https://api.themoviedb.org/3/tv/${category?category:"popular"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handlewheel);
  }, []);
    return(
       
        <div className="show-cards">
        <h2>{title?title:"Popular Shows"}</h2>
        <div className="show-cards-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
            return <div className="card" key={index}>
                <div> <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} /></div>
                  <p>{card.name}</p> 
                  </div>
                 
        })}
        </div>
         </div>
     
    )
}