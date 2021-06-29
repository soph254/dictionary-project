import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);

    }
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);

    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);


    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000019daec9ec3f844a91a1b1b34b99837f04";
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
      
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
                    <div className="row">
                        <div className="col-8">
                    <input 
                    type="search" autoFocus={true} onChange={handleKeyWordChange} defaultValue={props.defaultKeyword} />
                    </div>
                    <div className="col-4">
                        <input type="submit" value="Search" className="button-search" onClick={search} />
                        </div>
                        </div>
                </form>
                <div className="hint">
                    Suggested words: sunset, wine, yoga, dusk ...
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
                
    
            </div>
        );
    } else {
        Load()
        return "Loading";
    }

       

    

   
    
}