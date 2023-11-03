import '../../Assets/css/MovieCard.css'
import { Rating,Card,Image,Pagination } from 'semantic-ui-react'

const MovieCard = ({movies, activePage, totalPages, handlePaginationChange }) => {
  return (
    <>
        <Card.Group itemsPerRow={4} className='ui centered stackable card-group'>
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
        </Card.Group>
        <Pagination
          activePage={activePage}
          totalPages={totalPages}
          onPageChange={handlePaginationChange}
        />
        
  </>
  )
}

export default MovieCard ;