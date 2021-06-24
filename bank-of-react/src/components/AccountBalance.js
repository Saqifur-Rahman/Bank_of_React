import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance:  <b>{this.props.accountBalance}</b>
        </div>
    );
  }
}

export default AccountBalance;