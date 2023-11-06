import React,{useState,useEffect} from "react";
import MovieCard from '../../main/MovieCard'
import  fetchData from '../../../API/fetchData'
import { Header,Icon } from 'semantic-ui-react'


const TV = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = '37f9159ef25a3d939000ae37af4753b0';
  const apiURL=`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${activePage}`
 
  useEffect(() => {
    fetchData(apiURL,setMovies,setTotalPages);
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
          <Icon color='blue' name='tv' />
            Discover TV Shows
          <Icon color='blue' name='tv' />
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

export default TV