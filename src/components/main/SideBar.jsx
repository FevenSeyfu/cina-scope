import React from 'react'
import Filter from './Filter'

const SideBar = () => {
  return (
    <div className='ui visible left four wide sidebar'>
      {/* <Filter /> */}
        <a class="item">
            Trending
            <i class="fire large icon"></i>
        </a>
        <a class="item">
           Movies
           <i class="film large icon"></i>
        </a>
        <a class="item">
            Tv Series
            <i class="tv large icon"></i>
        </a>
    </div>
  )
}

export default SideBar