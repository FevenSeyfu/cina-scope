import React from 'react'
import MovieCard from './MovieCard'
import '../../Assets/css/MovieCard.css'
import {Card,Pagination } from 'semantic-ui-react'
const MovieList = () => {
  return (
     <div>
        <Card.Group itemsPerRow={4} className='centered stackable card-group'>
          <MovieCard />
        </Card.Group>
        <Pagination 
          className="pagination"
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={5}
      />
     </div>
  )
}

export default MovieList