import React from 'react';
import Tvshows from './src/pages/Tvshows/Tvshows';


export default function TvShowsPage() {
  return (


    <div className='Shows-page'>
         <div style={{ paddingTop: "30px" , marginLeft: "50px" }}>
        <div className="show-section">
        <div className="show-header">
        <h1>TV Shows</h1>
        <p>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</p>
        </div>
      <Tvshows title="Popular Shows" category="popular" />
      <Tvshows title="Top Rated Shows" category="top_rated" />
      <Tvshows title="Airing Today" category="airing_today" />
      <Tvshows title="Currently On Air" category="on_the_air" />
    </div>
    </div>
    </div>
  );
}
