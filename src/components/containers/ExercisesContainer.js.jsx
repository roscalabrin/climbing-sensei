import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import KeyGenerator from './../helpers/keyGenerator'
import ExerciseLink from './../UI/ExerciseLink.js.jsx'
import './../UI/styles/Exercises.css'

class ExercisesContainer extends Component {
  formattedExercises = () => {
    const keyGetter = new KeyGenerator()

    return this.props.exercises.map(ex => {
      let path = `/exercises/${ex.name}`
      return (
        <ExerciseLink
          path={path}
          key={keyGetter.randomKey}
          exercise={ex}
        />
      )
    })
  }

  render() {
    const exercises = this.formattedExercises()

    return (
      <Col sm={12} md={6} className='exercises'>
        { exercises }
      </Col>
    )
  }
}

export default ExercisesContainer
