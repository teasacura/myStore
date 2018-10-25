import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
  return(
    <div>
      {`Welcome ${props.user.username}`}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Profile);
