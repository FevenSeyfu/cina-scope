import React,{useState,useEffect} from "react";
import MovieCard from '../../main/MovieCard'
import  fetchTrendingMovies from '../../../API/fetchTrendingMovies'


const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = '37f9159ef25a3d939000ae37af4753b0';
 
  useEffect(() => {
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
            handlePaginationChange={handlePaginationChange}/>
     </div>
  )
}

export default Trending