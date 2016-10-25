import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './styles/Skeleton.css'

class Skeleton extends Component {
  render() {
    return (
      <Col className='skeleton-container' sm={8} md={4}>
        {this.props.skellys}
      </Col>
    )
  }
}

export default Skeleton
