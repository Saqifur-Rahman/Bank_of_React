import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Form, Col, Button } from 'react-bootstrap';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div style={{marginLeft: '1%'}}>
        <h1>Login:</h1>
        <br />

        {/* Form for mock Sign in */}
        <Card style={{width: '25%'}}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Group className="mb-3" controlId="userName">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="userName"
                      onChange={this.handleChange} 
                      value={this.state.user.userName}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button variant="primary mt-3" size="sm" type="submit">
                  Login
              </Button>
            </Form>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default LogIn