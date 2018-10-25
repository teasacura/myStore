import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" render={() => this.props.loggedIn ? <Profile /> : <Login />} />
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: () => dispatch({type: 'ADD_CARD'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
