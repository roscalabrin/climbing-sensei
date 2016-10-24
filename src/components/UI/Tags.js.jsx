import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import './styles/Tags.css'

class Tags extends Component {
  render() {
    return (
      <Col className='tags-container' sm={14} md={7}>
        {this.props.tags}
        <Button bsStyle={ 'danger' } className='clear-tags'>Clear Tags</Button>
      </Col>
    )
  }
}

export default Tags
