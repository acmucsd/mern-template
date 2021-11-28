import React, { Component } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        email: props.user.email,
        username: props.user.username,
        name: props.user.name,
        password: "",
        passwordConfirm: "",
      },
      PwLengthOK: true,
      PwConsistency: true,
      UserNameChanged: false,
    };
  }

  checkPwConsistency(event) {
    // It will update the password Confirm state value and check consistency
    let newState = this.state;
    newState.formValue.passwordConfirm = event.target.value;
    newState.PwConsistency = event.target.value === newState.formValue.password;
    this.setState(newState);
  }

  checkPwLength(event) {
    // It will update the password state value and check length
    let newState = this.state;
    newState.formValue.password = event.target.value;
    newState.PwLengthOK = newState.formValue.password.length >= 6;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ UserNameChanged: false });
    this.props.onRegister(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value
    );
  }

  handleUserNameChange(event) {
    console.log("reach here?");
    this.setState({ UserNameChanged: true });
  }

  render() {
    const UserNameDuplicate =
      this.props.errorMessage === "The username has already be taken!";
    return (
      <Container>
        <div className="d-flex justify-content-center" style={{ padding: 120 }}>
          <Card style={{ width: "40rem" }}>
            <Card.Header className="mb3">Register</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Enter Email"
                    defaultValue={this.state.formValue.email}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    required
                    defaultValue={this.state.formValue.username}
                    onChange={this.handleUserNameChange.bind(this)}
                    isInvalid={UserNameDuplicate && !this.state.UserNameChanged}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.props.errorMessage}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    isInvalid={!this.state.PwLengthOK}
                    onChange={this.checkPwLength.bind(this)}
                  />
                  <Form.Control.Feedback type="invalid">
                    The password should be at least 6 digits long.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formGroupPasswordConfirm"
                >
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                    isInvalid={!this.state.PwConsistency}
                    onChange={this.checkPwConsistency.bind(this)}
                  />
                  <Form.Control.Feedback type="invalid">
                    The password doesn't match.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Login;
