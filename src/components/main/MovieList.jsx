import React,{useState,useEffect} from "react";

import MovieCard from './MovieCard'
import fetchTrendingMovies from '../../API/fetchTrendingMovies'

import '../../Assets/css/MovieCard.css'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiKey = '37f9159ef25a3d939000ae37af4753b0';

    fetchTrendingMovies(apiKey,activePage,setMovies,setTotalPages);
  }, [activePage]);
  
  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  };
  return (
     <div>
          <MovieCard 
            movies = {movies}
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={handlePaginationChange}/>
     </div>
  )
}

export default MovieList