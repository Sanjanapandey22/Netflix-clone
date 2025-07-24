import React, { useState } from "react";
import { useRef, useEffect } from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data';
import { Link } from "react-router-dom";


export default function TitleCards({title, category}){ 
    const [apiData, setApiData] = useState([]);
      
    const cardsRef = useRef();

    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMzYWNiNGJkYjBhMTJmZWMyM2RhOWQ3ZDg5ZWVkYSIsIm5iZiI6MTc1MzE2OTM1Ny40MTUsInN1YiI6IjY4N2YzZGNkZGFhODY5ZWQ2NTE2YThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8c21ShVzFEIoz-ke-620tmFrur9uwYYjTJ2kO43CuaY'
  }
};

    const  handlewheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };

  useEffect(()=> {
    
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel);
  }, []);

    return(
        <div className="title-cards">
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index)=> {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}