import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import GridCardFactory from './GridCardFactory';
import Spinner from './Spinner';

function MovieSearch() {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [movieList, setMovieList] = useState([]);

    const queryMovieAPI = async(searchQuery) => {
        setLoading(true);
        setErrorMessage("");

        if (searchQuery === "") {
            setLoading(false);
        } else {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=c0ef8255&s=${searchQuery}`);
                console.log(response.data);

                if (response.data.Response === "True") {
                    console.log("Request Success");
                    setMovieList(response.data.Search);
                    //console.log(movieList)
                } else {
                    setErrorMessage(response.data.Error);
                    console.log("response.data.response !== True. See error message: ",errorMessage);
                }

            } catch (error) {
                setErrorMessage(error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    } 


    return (
        <div>
            <SearchBar onSearch={queryMovieAPI}/>

            {loading && <Spinner/>}
            {errorMessage !== "" && <p>{errorMessage}</p>}

            <GridCardFactory movies={movieList} />
        </div>
    );
}

export default MovieSearch;