import React, { Component } from 'react'
import { Link } from 'react-router'
import { Modal, Button, Nav, NavItem } from 'react-bootstrap'

class Routine extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: '1' }
  }

  renderTab = (tabNum) => {
    this.setState({ activeTab: tabNum })
  }

  render() {
    const path = `/workouts/${this.props.params.workoutName}/`
    return (
      <div>
        <Modal show={true} bsSize='large'>
          <Nav bsStyle='tabs' activeKey={this.state.activeTab} justified={true}>
            <NavItem eventKey='1' onClick={this.renderTab.bind(this, '1')}>Goals & Details</NavItem>
            <NavItem eventKey='2' onClick={this.renderTab.bind(this, '2')}>Steps</NavItem>
            <NavItem eventKey='3' onClick={this.renderTab.bind(this, '3')}>Intensity & Beta</NavItem>
          </Nav>
          <Modal.Header>
            <Modal.Title>Workout #{ this.props.params.workoutName }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.props.children}
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
