import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import Workouts from './../UI/Workouts.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import Tags from './../UI/Tags.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'

class BuilderContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <Row>
              <Tags
                tags={this.props.tags}
              />
              <Skeleton />
            </Row>
            <Row>
              <Col sm={12} md={6} className='exercises'>
                {this.props.children}
              </Col>
              <Workouts />
            </Row>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tags: state.mainReducer.tags }
}

export default connect(mapStateToProps)(BuilderContainer)

