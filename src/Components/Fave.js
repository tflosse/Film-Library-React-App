import React, { useState } from "react";

const Fave = () => {
    const [isFave,setIsFave] = useState(false);
    const handleClick = () => setIsFave(!isFave)
    console.log("Handling Fave Click!");
    let stateClass = isFave? " remove_from_queue":" add_to_queue";
    return(
        <div className={"film-row-fave"+stateClass}
            onClick={handleClick}>
            <p className="material-icons">{isFave? "remove_from_queue":"add_to_queue"}</p>
        </div>
    )
}

export default Fave;