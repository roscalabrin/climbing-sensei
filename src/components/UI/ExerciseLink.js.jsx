import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { ItemTypes } from './../../constants'
import { DragSource } from 'react-dnd'

const exerciseLinkSource = {
  beginDrag(props) {
    return { id: props.exercise.id }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class ExerciseLink extends Component {

  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div>
        <Link to={this.props.path}
        >
          <h3 className='exercise'>{ this.props.exercise.name }</h3>
        </Link>

      </div>
    )
  }
}

ExerciseLink.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.EXERCISE_LINK, exerciseLinkSource, collect)(ExerciseLink)
