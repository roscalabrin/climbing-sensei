import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import Workouts from './../UI/Workouts.js.jsx'
import Routines from './../UI/Routines.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import Tags from './../UI/Tags.js.jsx'

class BuilderContainer extends Component {
  getTags = (num) => {
    const tags = []
    for (let i = 0; i < num; i++) {
      const tag = <Col md={2} className='tag-container'><span className='tag'>Ipsum</span></Col>
      tags.push(tag)
    }
    return tags
  }


  render() {
    return (
      <div>
        <Grid>
          {this.props.children}
          <Jumbotron>
            <Row>
              <Tags
                tags={this.getTags(20)}
              />
              <Skeleton />
            </Row>
            <Row>
              <Routines
              />
              <Workouts />
            </Row>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}

export default BuilderContainer
