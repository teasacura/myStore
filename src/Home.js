import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  return(
    <div>
      <button> Get Started! </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Home);
