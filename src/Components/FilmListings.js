import React, { useState } from "react";
import FilmRow from "./FilmRow";

const FilmListings = (props) => {
    const [filter,setFilter] = useState('all')
    const film = filter === "faves"? props.faves : props.films;

    const allFilms = props.films.map((film, i) => {
        return (
        <FilmRow film={film} 
                key={film.id} 
                onFaveToggle={() => props.onFaveToggle(film)}
                isFave={props.faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}/>
    )});
    const faveFilms = props.faves.map((film, i) => {
        return (
        <FilmRow film={film} 
                key={film.id} 
                onFaveToggle={() => props.onFaveToggle(film)}
                isFave={props.faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}/>
    )});

    const handleFilterClick = (filter) => setFilter(filter)
        console.log("Setting filter to "+filter);
        return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all'? 'is-active' : ''}`}
                onClick={() => handleFilterClick('all')}> 
                ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves'? 'is-active' : ''}`}
                onClick={() => handleFilterClick('faves')}> 
                FAVES
                    <span className="section-count">{props.faves.length}</span>
                </div>
            </div>
            {filter === 'faves'? faveFilms:allFilms}
        </div>
    );
   }
   
   export default FilmListings;