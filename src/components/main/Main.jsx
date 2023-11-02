import React from 'react'
import MovieList from './MovieList'
import SideBar from './SideBar'
import { Grid } from 'semantic-ui-react'

const Main = () => {
  return (
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={14}>
          <MovieList/>
        </Grid.Column>
      </Grid.Row>
  </Grid>
  )
}

export default Main