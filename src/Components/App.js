import React, {useState} from 'react'
import './App.css'
import FilmListings from './FilmListings'
import FilmDetails from './FilmDetails'
import TMDB from "../TMDB.js";

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [faves, setFaves] = useState([]);
  const [current, setCurrent] = useState({});

  const handleFaveToggle = (film) =>{
    const favesArray = [...faves];
    const filmIndex = favesArray.indexOf(film);
    if (filmIndex > -1){
      favesArray.splice(filmIndex,1);
      console.log(`Removing ${film.title} from faves...`)
    } else {
      favesArray.push(film);
      console.log(`Adding ${film.title} to faves...`)
    }
    setFaves(favesArray);
  };
  const handleDetailsClick = (film) => {
    console.log("Fetching details for "+film.title)
  };

    return (
        <div className="film-library">
          < FilmListings films={films} faves={faves} 
          onFaveToggle={handleFaveToggle} 
          handleDetailsClick={handleDetailsClick}/>
          < FilmDetails films={current}/>
        </div>
    );
}

export default App