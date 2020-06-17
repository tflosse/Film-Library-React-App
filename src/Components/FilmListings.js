import React from "react";
import TMDB from "../TMDB";
import Year from "./Date";

const FilmListings = ({poster_path, title, release_date}) => {
    return (
       <div className="film-list">
           <h1 className="section-title">FILMS</h1>
           {TMDB.films.map((film, index) => {
               let posterUrl = "https://image.tmdb.org/t/p/w780/"+film.poster_path;
               return (
                    <div className="film-row">
                        <img className="film-poster" src={posterUrl} alt={film.title}></img>
                        <div className="film-summary">
                            <h1>{film.title}</h1>
                            <Year release_date={film.release_date} />
                        </div>
                    </div>
           )})}
       </div>
    )
   }
   
   export default FilmListings;