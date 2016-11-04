import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Workouts from './../UI/Workouts.js.jsx'
import Skeleton from './../UI/Skeleton.js.jsx'
import ExercisesContainer from './ExercisesContainer.js.jsx'
import TagsContainer from './TagsContainer.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'

class BuilderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTags: this.props.tags,
                   activeExercises: this.props.exercises,
                   workouts: [] }
  }

  activateTag = (targetTag) => {
    const newActiveExercises = [...targetTag.exercises, ...this.state.activeExercises]
    const newActiveTags = [targetTag, ...this.state.activeTags]
    this.update(newActiveTags, newActiveExercises)
  }

  deactivateTag = (targetTag) => {
    const newActiveTags = this.state.activeTags.filter(tag => {
      return targetTag.id !== tag.id
    })

    const exerciseIds = targetTag.exercises.map(e => e.id)

    const newActiveExercises = this.state.activeExercises.filter(exercise => {
      return !exerciseIds.includes(exercise.id)
    })
    this.update(newActiveTags, newActiveExercises)
  }

  clearTags = () => {
    this.update([], [])
  }

  handleDrop = (dragTarget) => {
    const targetExercise = this.state.activeExercises.find(exercise => {
      return exercise.id === dragTarget.id
    })

    const newWorkouts = [targetExercise, ...this.state.workouts]
    this.update(this.state.activeTags,
                this.state.activeExercises,
                newWorkouts)
  }

  update = (activeTags = this.state.activeTags,
            activeExercises = this.state.activeExercises,
            workouts = this.state.workouts) => {

    const newState = { activeTags: activeTags,
                       activeExercises: activeExercises,
                       workouts: workouts }

    this.setState(newState)
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
              <Workouts
                workouts={this.state.workouts}
                handleDrop={this.handleDrop}
              />
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(BuilderContainer))

