import React,{useState} from 'react'
import logo  from '../../Assets/images/logo.png'
import { Menu,Icon } from 'semantic-ui-react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e,{name}) => {
    setActiveItem(name);
  }
  return (
    <div className='top-header'>
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="cineScope logo" className="logo" />
        </a>
      </div>
      <div class="ui grid">
        <div class="">
        <Menu pointing secondary stackable inverted >
          <Menu.Item 
            as='a' href='/'
            name='trending'
            active={activeItem === 'trending'}
            onClick={handleItemClick}
            >
            <Icon name='fire' />
            Trending
          </Menu.Item>
          <Menu.Item 
            as='a' 
            href='/movies'
            name='movies'
            active={activeItem === 'movies'}
            onClick={handleItemClick}>
            <Icon name='film' />
            Movies
          </Menu.Item>
          <Menu.Item 
            as='a' 
            href='/TV'
            name='tv'
            active={activeItem === 'tv'}
            onClick={handleItemClick}>
            <Icon name='tv' />
            TV Series
          </Menu.Item>
          <Menu.Item 
            as='a' 
            href='/search'
            name='search'
            active={activeItem === 'search'}
            onClick={handleItemClick}>
            <Icon name='search' />
            Search
          </Menu.Item>
        </Menu>
        </div>
     </div>

    

    </div> 

  )
}

export default Header