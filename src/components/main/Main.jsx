import React from 'react'
import MovieList from './MovieList'
import SideBar from './SideBar'

const Main = () => {
  return (
    <div className='main ui container'>
      <div className="ui grid">
        <SideBar />
        <MovieList />
      </div>
    </div>
  )
}

export default Main