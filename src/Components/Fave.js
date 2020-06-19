import React, { useState } from "react";

const Fave = (props) => {
    const handleClick = (event) => {
        console.log("Handling Fave Click!");
        props.onFaveToggle();
    }

    return(
        <div className={`film-row-fave ${props.isFave? " remove_from_queue":" add_to_queue"}`}
            onClick={handleClick}>
            <p className="material-icons">{props.isFave? "remove_from_queue":"add_to_queue"}</p>
        </div>
    )
}

export default Fave;