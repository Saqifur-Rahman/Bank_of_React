import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div style={{marginLeft: 20}}>
          <h1>User Profile</h1>

          <div>Username: <b>{this.props.userName}</b></div>
          <div>Member Since: <b>{this.props.memberSince}</b></div>
          <br />
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;