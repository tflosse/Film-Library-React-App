import React from 'react'
import './App.css'

import FilmListings from './FilmListings'
import FilmDetails from './FilmDetails'

function App () {
    return (
        <div className="film-library">
          < FilmListings />
          < FilmDetails />
        </div>
    )
}

export default App