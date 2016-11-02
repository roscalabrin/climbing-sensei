import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Exercise from './Exercise.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'
import './styles/Exercises.css'

class Exercises extends Component {
  formattedExercises = () => {
    const keyGetter = new KeyGenerator()

    return this.props.exercises.map(ex => {
      let path = `/exercises/${ex.name}`
      return <Link to={path}
                   key={keyGetter.randomKey}
             >
              <h5 className='exercise'>{ ex.name }</h5>
             </Link>
    })
  }

  render() {
    const exercises = this.formattedExercises()

    return (
      <div>
        { exercises }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const activePath = window.location.pathname.split('/').slice(-1).toString()
  const activeTag = state.mainReducer.tags.find(tag => {
    return tag.name.toLowerCase() === activePath.toLowerCase()
  })

  return { exercises: activeTag.exercises }
}

export default connect(mapStateToProps)(Exercises)
