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

  getRoutines = (num) => {
    const routines = []
    for (let i = 0; i < num; i++) {
      const plusIcon = <i className='fi-plus icon'></i>
      const viewIcon = <i className='fi-eye icon'></i>
      const iconColumn = <Col md={1}>{ plusIcon }<br></br>{ viewIcon }</Col>
      const textColumn = <Col md={11}><h2 className='routine'>Workout #{ i }</h2></Col>
      const workout = <Row>{ iconColumn }{ textColumn }</Row>
      routines.push(workout)
    }
    return routines
  }

  getSkeletonData = () => {
    const skellys = []
    for (let i = 0; i < 4; i++) {
      skellys.push(<Row><Button className='skelly' bsStyle='primary' bsSize='small'>Ipsum Lorem</Button></Row>)
    }
    return skellys
  }

  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <Row>
              <Tags
                tags={this.getTags(20)}
              />
              <Skeleton
                skellys={this.getSkeletonData()}
              />
            </Row>
            <Row>
              <Routines
                routines={this.getRoutines(7)}
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
