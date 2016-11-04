import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import Workouts from './../UI/Workouts.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import ExercisesContainer from './ExercisesContainer.js.jsx'
import TagsContainer from './TagsContainer.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'

class BuilderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTags: this.props.tags,
                   activeExercises: this.props.exercises }
  }

  activateTag = (targetTag) => {
    const newActiveExercises = [...targetTag.exercises, ...this.state.activeExercises]
    const newActiveTags = [targetTag, ...this.state.activeTags]
    this.setState({ activeTags: newActiveTags, activeExercises: newActiveExercises })
  }

  deactivateTag = (targetTag) => {
    const newActiveTags = this.state.activeTags.filter(tag => {
      return targetTag.id !== tag.id
    })

    const exerciseIds = targetTag.exercises.map(e => e.id)

    const newActiveExercises = this.state.activeExercises.filter(exercise => {
      return !exerciseIds.includes(exercise.id)
    })

    this.setState({ activeTags: newActiveTags, activeExercises: newActiveExercises })
  }

  clearTags = () => {
    this.setState({ activeTags: [], activeExercises: [] })
  }

  render() {
    return (
      <div>
        <Grid>
          {this.props.children}
          <Jumbotron>
            <Row>
              <TagsContainer
                clearTags={this.clearTags}
                activeTags={this.state.activeTags}
                activateTag={this.activateTag}
                deactivateTag={this.deactivateTag}
              />
              <Skeleton />
            </Row>
            <Row>
              <ExercisesContainer
                exercises={this.state.activeExercises}
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
  const exercises = state.mainReducer.tags.reduce((array, tag) => {
    return [...array, ...tag.exercises]
  }, [])

  return { tags: state.mainReducer.tags,
           exercises: exercises }
}

export default connect(mapStateToProps)(BuilderContainer)

