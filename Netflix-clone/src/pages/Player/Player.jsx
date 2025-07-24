import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Player.css'

export default function Player(){

     const { id } = useParams(); 
     console.log("Movie ID:", id);

     const navigate = useNavigate();

const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTMzYWNiNGJkYjBhMTJmZWMyM2RhOWQ3ZDg5ZWVkYSIsIm5iZiI6MTc1MzE2OTM1Ny40MTUsInN1YiI6IjY4N2YzZGNkZGFhODY5ZWQ2NTE2YThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8c21ShVzFEIoz-ke-620tmFrur9uwYYjTJ2kO43CuaY'
  }
};  

  useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));


  }, [])

const trailer = apiData.results.find(
  (video) => video.type === "Trailer" && video.site === "YouTube"
);


    return(
        <div className="player">
            <img src="/back_arrow_icon.png" alt="" onClick={()=>{navigate(-2)}} />
            <iframe width="90%" height="90%"   src={`https://www.youtube.com/embed/${trailer?.key}`} 

            title="trailer" frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
        </div>
    )
}