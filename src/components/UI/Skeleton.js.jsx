import React, { Component } from 'react'
import { Col, Carousel} from 'react-bootstrap'
import './styles/Skeleton.css'

class Skeleton extends Component {
  render() {
    const placeHolder = <img width={350} height={150} src='https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150'></img>
    return (
      <Col className='skeleton-container' sm={8} md={4}>
        <Carousel indicators={false} interval={0}>
          <Carousel.Item>
            { placeHolder }
          </Carousel.Item>
          <Carousel.Item>
            { placeHolder }
          </Carousel.Item>
        </Carousel>
      </Col>
    )
  }
}

export default Skeleton
