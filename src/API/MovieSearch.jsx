import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = ({ searchQuery, setMovies }) => {
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '37f9159ef25a3d939000ae37af4753b0';
        const apiURL=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
 
        const response = await axios.get(apiURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, setMovies]);

  return null; 
};

export default MovieSearch;
