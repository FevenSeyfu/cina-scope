import '../../Assets/css/MovieCard.css'
import { Rating,Card,Image,Pagination } from 'semantic-ui-react'

const cardStyle = {
  borderRadius: '1rem', 
};
const cardGroupStyle = {
  marginTop: '10rem', 
};

const MovieCard = ({HeaderTop,movies, activePage, totalPages, handlePaginationChange }) => {
  return (
    <div style={cardGroupStyle}>
        <HeaderTop />
        <Card.Group itemsPerRow={4} className='ui centered stackable'>
        {movies.map((movie) => (
          <Card className='movie-card centered' key={movie.id} style={cardStyle}>
            <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} wrapped ui={false} />
            <Card.Content className='card-content'>
              <Card.Header>{movie.title? movie.title : movie.name}</Card.Header>
              <Card.Meta>Release Date : {movie.release_date}</Card.Meta>
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
  </div>
  )
}

export default MovieCard ;