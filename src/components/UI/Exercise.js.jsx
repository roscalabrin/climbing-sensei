import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router'
import { Modal, Button, Nav, NavItem } from 'react-bootstrap'

class Exercise extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: '1' }
  }

  componentWillMount() {
    this.props.dispatch(push(this.defaultHref()))
  }

  renderTab = (tabNum, pathName) => {
    this.setState({ activeTab: tabNum })
    const path = `/exercises/${this.props.params.exerciseName}/${pathName}`
    this.props.dispatch(push(path))
  }

  defaultHref = () => {
    return `/exercises/${this.props.params.exerciseName}/goals-and-details`
  }

  render() {
    return (
      <div>
        <Modal show={true} bsSize='large'>
          <Nav bsStyle='tabs' activeKey={this.state.activeTab} justified={true}>
            <NavItem eventKey='1' onClick={this.renderTab.bind(this, '1', 'goals-and-details')}>Goals & Details</NavItem>
            <NavItem eventKey='2' onClick={this.renderTab.bind(this, '2', 'steps')}>Steps</NavItem>
            <NavItem eventKey='3' onClick={this.renderTab.bind(this, '3', 'intensity-and-beta')}>Intensity & Beta</NavItem>
          </Nav>
          <Modal.Header>
            <Modal.Title>{ this.props.params.exerciseName }</Modal.Title>
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

export default connect()(Exercise)
