import React from 'react'
import { Container,Card, Image } from 'semantic-ui-react'

const MovieDetail = ({ movie }) => {
  return (
    <Container>
      <Card>
        <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{movie.release_date}</span>
          </Card.Meta>
          <Card.Description>
            {movie.overview}
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default MovieDetail