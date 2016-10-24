import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './styles/Tags.css'

class Tags extends Component {
  render() {
    return (
      <Col className='tags-container' sm={16} md={8}>
        <p>Tags</p>
      </Col>
    )
  }
}

export default Tags
