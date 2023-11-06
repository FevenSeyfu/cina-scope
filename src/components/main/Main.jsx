import React from 'react'

import Trending from './Pages/Trending'
import Movies from './Pages/Movies'
import Search from './Pages/Search'
import Error from './Pages/Error'
import TV from './Pages/TV'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Grid centered>
          <Grid.Column width={14}>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies /> } />
              <Route path="/tv" element={<TV />} /> 
              <Route path="/search" element={<Search/>} /> 
              <Route path="*" element={<Error />} /> 
            </Routes>
          </Grid.Column>
      </Grid>
    </BrowserRouter>
  )
}

export default Main