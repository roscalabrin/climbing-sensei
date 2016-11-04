import React, { Component } from 'react'
import { Link } from 'react-router'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './../../constants'
import KeyGenerator from './../helpers/keyGenerator'
import paramaterize from './../helpers/paramaterize'
import './../UI/styles/WorkoutsContainer.css'

const workoutsTarget = {
  drop(props, monitor, component) {
    const workout = monitor.getItem()
    component.props.handleDrop(workout)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

class WorkoutsContainer extends Component {
  constructor() {
    super()
    this.classNames = ['workouts-container']
  }

  componentWillReceiveProps(nextProps) {
    const hasMouseEntered = !this.props.isOver && nextProps.isOver
    const hasMouseLeft = !nextProps.isOver && nextProps.canDrop

    if (hasMouseEntered) {
      this.classNames.push('drag-mouse-over')
    }
    else {
      this.classNames = this.classNames.filter(c => c !== 'drag-mouse-over')
    }

    if (hasMouseLeft) {
      this.classNames.push('drag-mouse-not-over')
    }
    else {
      this.classNames = this.classNames.filter(c => c !== 'drag-mouse-not-over')
    }
  }

  formattedWorkouts = () => {
    const keyGetter = new KeyGenerator()

    return this.props.workouts.map(workout => {
      const path = `/exercises/${paramaterize(workout.name)}`

      return (
        <Link to={path}
              key={keyGetter.randomKey}
        >
          <h3>{ workout.name }</h3>
        </Link>
      )
    })
  }

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props
    const workouts = this.formattedWorkouts()
    const classNames = this.classNames.join(' ')

    return connectDropTarget(
      <div className={classNames}
      >
        { workouts }
      </div>
    )
  }
}

export default DropTarget(ItemTypes.EXERCISE_LINK, workoutsTarget, collect)(WorkoutsContainer)
