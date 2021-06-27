import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Results from "./Results";



export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);

    }
    function handleResponse(response) {
        setResults(response.data[0]);

    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }
    function Load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return(
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="search" autoFocus={true} onChange={handleKeyWordChange} defaultValue={props.defaultKeyword} />
                </form>
                <div className="hint">
                    Suggested words: sunset, wine, yoga, dusk ...
                </div>
                </section>
                <Results results={results} />
                
    
            </div>
        );
    } else {
        Load()
        return "Loading";
    }

       

    

   
    
}