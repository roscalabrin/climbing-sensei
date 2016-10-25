import React, { Component } from 'react'
import { Link } from 'react-router'
import { Modal, Button } from 'react-bootstrap'

class Routine extends Component {
  render() {
    return (
      <div>
        <Modal show={true} bsSize='large'>
          <Modal.Header>
            <Modal.Title>Workout #{ this.props.params.workoutName }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Body goes here.
          </Modal.Body>

          <Modal.Footer>
            <Link to='/builder'><Button>Close</Button></Link>
          </Modal.Footer>

        </Modal>
      </div>
    )
  }
}

export default Routine
