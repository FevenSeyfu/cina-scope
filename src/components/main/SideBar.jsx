import React from 'react'
import Filter from './Filter'

const SideBar = () => {
  return (
    <div className='ui left four wide sidebar'>
      {/* <Filter /> */}
      <nav className="navbar">
          <ul>
            <li>
              <a class="item">
                Trending
                <i class="fire large icon"></i>
              </a>
            </li>
            <li>
              <a class="item">
                Movies
                <i class="film large icon"></i>
              </a>
            </li>
            <li>
              <a class="item">
                Tv Series
                <i class="tv large icon"></i>
              </a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default SideBar