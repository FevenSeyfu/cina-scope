import React from 'react'
import { Rating,Card,Image } from 'semantic-ui-react'
import image1 from '../../Assets/images/avatar 1.jpg'
import image2 from '../../Assets/images/avatar 2.jpg'

const MovieCard = () => {
  return (
    <Card.Group itemsPerRow={4} className='centered stackable'>
      <Card>
        <Image src={image1} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Movie Title</Card.Header>
          <Card.Meta>Release date</Card.Meta>
        </Card.Content>
        <Card.Content extra>
        Rating:
            <Rating icon='star' defaultRating={3} maxRating={5} />
        </Card.Content>
      </Card>

      <Card>
        <Image src={image2} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Movie Title</Card.Header>
          <Card.Meta>Release date</Card.Meta>
        </Card.Content>
        <Card.Content extra>
        Rating:
            <Rating icon='star' defaultRating={3} maxRating={5} />
        </Card.Content>
      </Card>
      
    </Card.Group>
  )
}

export default MovieCard