import React from 'react'
import MovieList from './MovieList'

// import Trending from './Pages/Trending'
import Movies from './Pages/Movies'
import Search from './Pages/Search'
import Error from './Pages/Error'
import TV from './Pages/TV'

import SideBar from './SideBar'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={2}>
            {/* <SideBar /> */}
          </Grid.Column>
          <Grid.Column centeed width={13}>
            <Routes>
              <Route path="/" element={<MovieList />} exact />
              <Route path="/movies" element={<Movies /> } />
              <Route path="/tv" element={<TV />} /> 
              <Route path="/search" element={<Search />} /> 
              <Route path="*" element={<Error />} /> 
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </BrowserRouter>
  )
}

export default Main