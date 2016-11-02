import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col, Button } from 'react-bootstrap'
import KeyGenerator from './../helpers/keyGenerator'
import './styles/Tags.css'

class Tags extends Component {
  componentDidMount() {
    console.log(this.props.tags)
  }

  formattedTags = () => {
    const keyGetter = new KeyGenerator()

    return this.props.tags.map(tag => {
      const path = `/tags/${tag.name}`
      return (
        <Col md={3}
             className='tag-container'
             key={keyGetter.randomKey}
        >
          <Link to={path}
                activeStyle={{ color: 'red' }}
          >
            <span className='tag'>{ tag.name }</span>
          </Link>
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
