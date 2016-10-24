import React, { Component } from 'react'
import { Grid, Row, Jumbotron } from 'react-bootstrap'
import Workouts from './../UI/Workouts.js.jsx'
import Routines from './../UI/Routines.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import Tags from './../UI/Tags.js.jsx'

class BuilderContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <Row>
              <Tags />
              <Skeleton />
            </Row>
            <Row>
              <Routines />
              <Workouts />
            </Row>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}

export default BuilderContainer
