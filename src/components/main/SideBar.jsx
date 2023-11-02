import React from 'react'
// import Filter from './Filter'
import { Icon, Menu, Sidebar,Container } from 'semantic-ui-react';
import '../../Assets/css/SideBar.css'

const SideBar = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <Sidebar.Pushable as={Container} className='Sidebar'>
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
      <Menu.Item as='a'>
        <Icon name='film' />
        Movies
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='fire' />
        Trending
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='tv' />
        TV Series
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher dimmed={visible}>
        <Icon onClick={() => setVisible(!visible)} bordered inverted name='sidebar' size='large' color='black' />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  )
}

export default SideBar