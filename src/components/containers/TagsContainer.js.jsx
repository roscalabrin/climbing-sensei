import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Button } from 'react-bootstrap'
import Tag from './../UI/Tag.js.jsx'
import KeyGenerator from './../helpers/keyGenerator'
import './../UI/styles/Tags.css'

class TagsContainer extends Component {
  isActive = (tag) => {
    const activeIds = this.props.activeTags.map(t => t.id)
    return activeIds.includes(tag.id)
  }

  toggleActivation = (tag) => {
    if (this.isActive(tag)) {
      this.props.deactivateTag(tag)
    }
    else {
      this.props.activateTag(tag)
    }
  }

  formattedTags = () => {
    const keyGetter = new KeyGenerator()

    return this.props.tags.map(tag => {
      return (
        <Tag
          tag={tag}
          toggleActivation={this.toggleActivation.bind(null, tag)}
          key={keyGetter.randomKey}
          isActive={this.isActive(tag)}
        />
      )
    })
  }

  render() {
    const tags = this.formattedTags()

    return (
      <Col className='tags-container' sm={14} md={7}>
        { tags }
        <Button bsStyle={ 'danger' }
                className='clear-tags'
                onClick={this.props.clearTags}
        >
          Clear Tags
        </Button>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return { tags: state.mainReducer.tags }
}

export default connect(mapStateToProps)(TagsContainer)
