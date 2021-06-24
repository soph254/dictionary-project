import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);

    }
    function handleResponse(response) {
        console.log(response.data[0]);

    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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