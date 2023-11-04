import React,{useState} from 'react'
import logo  from '../../Assets/images/logo.png'
import Search from '../main/Pages/Search';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const HandleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  const handleSearchSubmit = (e) => {
    <Search  searchValue={searchValue}/>
  }

  return (
    <div className='top-header'>
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="cineScope logo" className="logo" />
        </a>
      </div>
      <div class="ui grid">
        <div class="two wide column">
          <div class="ui search">
            <form class="ui icon input" onSubmit={handleSearchSubmit}>
              <input type="text" autoComplete="off" value={searchValue} placeholder="Search..." onChange={HandleSearchChange} tabindex="0" class="prompt"/>
                <i aria-hidden="true" class="search icon"></i>
            </form>
          </div>
        </div>
     </div>
    </div> 

  )
}

export default Header