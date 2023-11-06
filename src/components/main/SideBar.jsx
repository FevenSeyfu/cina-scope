import React from 'react'
// import Filter from './Filter'
import { Icon, Menu, Sidebar,Container } from 'semantic-ui-react';
import '../../Assets/css/SideBar.css'

const SideBar = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <Sidebar.Pushable  className='Sidebar'>
    <Sidebar
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      onHide={() => setVisible(false)}
      vertical
      width='thin'
      visible={visible}
    >
      <Menu.Item as='a' href='/'>
        <Icon name='fire' />
        Trending
      </Menu.Item>
      <Menu.Item as='a' href='/movies'>
        <Icon name='film' />
        Movies
      </Menu.Item>
      <Menu.Item as='a' href='/TV'>
        <Icon name='tv' />
        TV Series
      </Menu.Item>
      <Menu.Item as='a' href='/search'>
        <Icon name='search' />
        Search
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher >
        <Icon onClick={() => setVisible(!visible)} bordered inverted name='sidebar' size='large' color='black' />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  )
}

export default SideBar