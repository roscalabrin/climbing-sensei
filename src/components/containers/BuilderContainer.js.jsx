import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import Workouts from './../UI/Workouts.js.jsx'
import Routines from './../UI/Routines.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import Tags from './../UI/Tags.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'

class BuilderContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          {this.props.children}
          <Jumbotron>
            <Row>
              <Tags
                tags={this.props.tags}
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

function mapStateToProps(state) {
  return { tags: state.mainReducer.tags }
}

export default connect(mapStateToProps)(BuilderContainer)

