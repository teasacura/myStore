import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  if (props.loggedIn) {
    return(
      <div>
        Home
      </div>
    )
  } else {
    return (<Redirect to="/login" />)
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Home);
