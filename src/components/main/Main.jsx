import React from 'react'
import MovieList from './MovieList'
import SideBar from './SideBar'
import Pagination from './Pagination'

const Main = () => {
  return (
    <div className='ui container'>
      <div className="ui grid">
        <SideBar />
        <MovieList />
      </div>
      <Pagination className='ui segment'/>
    </div>
  )
}

export default Main