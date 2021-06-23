import React, { useState } from "react";
import "./dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);

    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input 
                type="search" autoFocus={true} onChange={handleKeyWordChange} />


            </form>

        </div>
    );
}