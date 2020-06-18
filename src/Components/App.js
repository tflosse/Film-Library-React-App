import React from 'react'
import './App.css'
import FilmListings from './FilmListings'
import FilmDetails from './FilmDetails'
import TMDB from "../TMDB.js";

function App() {
    return (
        <div className="film-library">
          < FilmListings films={TMDB.films}/>
          < FilmDetails films={TMDB.films}/>
        </div>
    );
}

export default App