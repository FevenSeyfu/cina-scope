import React,{useState,useEffect} from "react";
import MovieCard from '../../main/MovieCard'
import  fetchTrendingMovies from '../../../API/fetchTrendingMovies'
import { Header,Icon } from 'semantic-ui-react'


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

  const headerStyle = {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    color:'#F5F5F5' ,
    padding: '0.3rem 0'
  };

  const HeaderTop = () => {
    return(
        <Header as='h1' style={headerStyle}>
          <Icon color='red' name='fire' />
          This weeks Trending Movies
          <Icon color='red' name='fire' />
        </Header>
    )
  }

  return (
     <div>
          <MovieCard 
            HeaderTop = {HeaderTop}
            movies = {movies}
            activePage={activePage}
            totalPages={totalPages}
            handlePaginationChange={handlePaginationChange}/>
     </div>
  )
}

export default Trending