import React from "react";
import TMDB from "../TMDB";

const Year = (film, index) => {
    let d = new Date(film.release_date)
    return (
        <p>{d.getFullYear()}</p>
    )
}
export default Year;