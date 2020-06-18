import React from "react";
import Fave from "./Fave";

const FilmRow = (props) => {
    const posterUrl = "https://image.tmdb.org/t/p/w780/"+props.film.poster_path;
    const dateYear = new Date(props.film.release_date);
    const handleDetailsClick = (film) => {
        console.log("Fetching details for "+props.film.title)
    };
        return (
            <div className="film-row" id={props.film.id}
            onClick={() => handleDetailsClick('film')}>
                <img className="film-poster" src={posterUrl} alt={props.film.title} />
                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{dateYear.getFullYear()}</p>
                </div>
                <Fave />
            </div>
        )
}

export default FilmRow;