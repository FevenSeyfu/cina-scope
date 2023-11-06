import React from 'react'
import { Rating, Image } from 'semantic-ui-react'
import '../../Assets/css/MovieDetail.css'

const MovieDetail = ({ movie }) => {
  return (
      <div className='movie-container'>
        <div >
          <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} wrapped ui={false} className='movie-img' />
        </div>
        <div className='movie-detail'>
              <h2>{movie.title? movie.title : movie.name}</h2>
              <h4>Release Date : <span className='date'>{movie.release_date? movie.release_date : movie.first_air_date}</span></h4>
              <h4>Description : </h4>
              <p className='text'>{movie.overview}</p>
              <h4>Rating : 
                <Rating icon='star' defaultRating={Math.round((movie.vote_average))} maxRating={10} /> {movie.vote_average}
              </h4>
        </div>
    </div>
  )
}

export default MovieDetail