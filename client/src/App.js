import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { Component } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

const salt = bcrypt.genSaltSync(10);
const BaseURL = "http://localhost:5000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoggedIn: false,
      User: {
        username: "",
        name: "",
        email: "",
        // Other fields maybe applied
      },
      ErrorMessage: "",
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister = (email, username, name, password) => {
    // Encrypt the password and send it to server
    const hashedPassword = bcrypt.hashSync(password, salt);
    axios
      .post(BaseURL + "/register", {
        email: email,
        username: username,
        name: name,
        password: hashedPassword,
      })
      .then((response) => {
        if (response.data.success === true) {
          const user = response.data.user;
          this.setState({
            IsLoggedIn: true,
            User: user,
          });
        } else {
          this.setState({
            ErrorMessage: "The username has already be taken!",
          });
        }
      });
  };

  handleLogin = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, salt);
    axios
      .post(BaseURL + "/login", {
        username: username,
        password: hashedPassword,
      })
      .then((response) => {
        if (response.data.success === true) {
          const user = response.data.user;
          this.setState({
            IsLoggedIn: true,
            User: user,
          });
        } else {
          this.setState({
            ErrorMessage: "Wrong username or password!",
          });
        }
      });
  };

  render() {
    const loggedIn = this.state.IsLoggedIn;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                onLogin={this.handleLogin}
                errorMessage={this.state.ErrorMessage}
                user={this.state.User}
              />
            )}
          </Route>
          <Route exact path="/register">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                onRegister={this.handleRegister}
                errorMessage={this.state.ErrorMessage}
                user={this.state.User}
              />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
