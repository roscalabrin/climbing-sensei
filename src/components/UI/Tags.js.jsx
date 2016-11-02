import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import './styles/Tags.css'

class Tags extends Component {
  componentDidMount() {
    console.log(this.props.tags)
  }

  formattedTags = () => {
    return this.props.tags.map(tag => {
      return (
        <Col md={3}
             className='tag-container'
        >
          <span className='tag'>{ tag.name }</span>
        </Col>
      )
    })
  }

  render() {
    const tags = this.formattedTags()

    return (
      <Col className='tags-container' sm={14} md={7}>
        { tags }
        <Button bsStyle={ 'danger' } className='clear-tags'>Clear Tags</Button>
      </Col>
    )
  }
}

export default Tags
