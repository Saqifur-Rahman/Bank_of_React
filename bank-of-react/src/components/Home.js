import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
    return (
        <div style={{marginLeft: 20}}>
            
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <div>
                <Link to="/userProfile">User Profile</Link>
            </div>
            <div>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
            <div>
                <Link to="/debits">Debits</Link>
            </div>
            <div>
                <Link to="/credits">Credits</Link>
            </div>
            
        </div>
    );
    }
}

export default Home;