import React, { Component } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChanged: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ hasChanged: false });
    this.props.onLogin(event.target[0].value, event.target[1].value);
  }
  handleChange(event) {
    this.setState({ hasChanged: true });
  }
  render() {
    const pwNotMatch =
      this.props.errorMessage === "Wrong username or password!";
    console.log(pwNotMatch);
    return (
      <Container>
        <div className="d-flex justify-content-center" style={{ padding: 120 }}>
          <Card style={{ width: "30rem" }}>
            <Card.Header className="mb3">Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Enter Username"
                    defaultValue={this.props.username}
                    required
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    isInvalid={pwNotMatch && !this.state.hasChanged}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.props.errorMessage}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Login;
