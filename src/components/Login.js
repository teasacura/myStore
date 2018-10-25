import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/items';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      user: this.state
    }
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(r => r.json()).then(user => {
      this.props.loginUser(user)
      this.loginLocalStorage(user.jwt)
    })
  }

  loginLocalStorage = (token) => {
    localStorage.token = token
  }

  render(){
    return (
      <div>
      {this.props.loggedIn ? (
        <Redirect to="/profile" />
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              <br></br>
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (arg) => {
      dispatch(loginUser(arg))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
