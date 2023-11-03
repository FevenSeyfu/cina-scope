import React,{useState,useEffect} from "react";
import axios from "axios";

import '../../Assets/css/MovieCard.css'
import { Rating,Card,Image } from 'semantic-ui-react'

import image1 from '../../Assets/images/avatar 1.jpg'
import image2 from '../../Assets/images/avatar 2.jpg'



const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const apiKey = '37f9159ef25a3d939000ae37af4753b0'
      const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

      const fetchTrendingMovies = async () => {
          try {
              const response = await axios.get(apiUrl);
              setMovies(response.data.results);
              console.log(response.data.results)
          }
          catch(error){
              console.error('Error fetching data:', error);
          }
      }
      fetchTrendingMovies();
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <Card className='movie-card centered' key={movie.id}>
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} wrapped ui={false} />
          <Card.Content className='card-content'>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>Release Date : {movie.release_date}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          Rating:
              <Rating icon='star' defaultRating={Math.round((movie.vote_average/2))} maxRating={5} />
          </Card.Content>
        </Card>
        ))}
  </>
  )
}

export default MovieCard ;