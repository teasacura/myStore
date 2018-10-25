import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  if (props.loggedIn) {
    return(
      <div>
        {`Welcome home, ${props.user.username}`}
      </div>
    )
  } else {
    return (<Redirect to="/login" />)
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Profile);
