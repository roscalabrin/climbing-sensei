import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class Tag extends Component {
  redIfActive = () => {
    if (this.props.isActive) {
      return { color: 'red' }
    }
  }

  render() {
    return (
      <Col md={3}
        className='tag-container'
      >
        <a
          href='#'
          className='tag'
          onClick={this.props.toggleActivation}
          style={this.redIfActive()}
        >
          { this.props.tag.name }
        </a>
      </Col>
    )
  }
}

export default Tag
