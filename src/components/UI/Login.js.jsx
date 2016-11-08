import React, { Component } from 'react'
import './styles/Login.css'
import {  Grid, Row, Col, Container, Form, Button } from 'react-bootstrap'

class Login extends Component {
  render () {
    return (
      <div className="container">
        {/* {errors} */}
        <div className="row">
          <div className="form-center is-responsive sign-up-form">
            <div className="form-body">
              <h2>Welcome back</h2>
              <br/>
              <form onSubmit={this._onSubmit}>
                <div className="field">
                  <label name="email">Email</label>
                  <input type="text" name="email" ref="email" placeholder="email" /> 
                </div>
      
                <div className="field">
                  <label name="password">Password</label>
                  <input type="password" name="password" ref="password" />
                  </div>
                  <button type="submit" className="sign-in-btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
