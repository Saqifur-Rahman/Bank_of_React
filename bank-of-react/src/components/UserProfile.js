import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

class UserProfile extends Component {
  render() {
    return (
        <div style={{marginLeft: 20}}>
          <h1>User Profile</h1>

          <ListGroup style={{width: 400, padding: 5, paddingLeft: 0}}>
              <ListGroup.Item action>
                <div>Username: <b>{this.props.userName}</b></div>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div>Member Since: <b>{this.props.memberSince}</b></div>
              </ListGroup.Item>
              <ListGroup.Item action>
                  <AccountBalance accountBalance={this.props.accountBalance}/>
              </ListGroup.Item>
          </ListGroup>
          <br />

          <Link to="/"><Button variant="primary" size="sm">Return to Home</Button></Link>

        </div>
    );
  }
}

export default UserProfile;