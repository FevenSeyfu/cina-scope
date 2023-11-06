import React,{useState,useEffect} from "react";
import MovieCard from '../../main/MovieCard'
import  MovieSearch from '../../../API/MovieSearch'

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

  };
  const headerStyle = {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    padding: '0.3rem 0'
  };
  const HeaderTop = () => {
    return(
      <div class="ui search" style={headerStyle}>
        <form class="ui icon input"  >
          <input type="text" 
                autoComplete="off" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleSearchChange}
                tabindex="0" 
                class="prompt"/>
            <i aria-hidden="true" class="search icon"></i>
        </form>
      
    </div>
    )
  }
  return (
     <div> 
        <MovieSearch searchQuery={searchQuery} setMovies={setMovies} activePage={activePage}/>
          <MovieCard 
            movies = {movies}
            activePage={activePage}
            totalPages={totalPages}
            HeaderTop = {HeaderTop}
            handlePaginationChange={handlePaginationChange}/>
     </div>
  )
}

export default Search