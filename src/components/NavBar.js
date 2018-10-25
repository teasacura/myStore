import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/items';

class NavBar extends React.Component {

  handleClick = () => {
    if (this.props.loggedIn) {
      this.props.logoutUser()
      this.clearLocalStorage()
    } else {
      window.location.pathname = "/login"
    }
  }

  clearLocalStorage() {
    localStorage.removeItem("token")
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>{this.props.loggedIn ? "Log Out" : "Log In"}</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

const NavBarWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

export default NavBarWithRouter;
