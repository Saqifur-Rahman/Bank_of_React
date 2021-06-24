import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
    return (
        <div style={{marginLeft: 20}}>
            
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <div>
                <Link to="/userProfile"><Button variant="info my-2" size="sm">User Profile</Button></Link>
            </div>
            <div>
                <ListGroup style={{width: 175, padding: 10, paddingLeft: 0}}>
                    <ListGroup.Item action>
                        <AccountBalance accountBalance={this.props.accountBalance}/>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Link to="/debits"><Button variant="danger my-2" size="sm">Debits</Button></Link>
            </div>
            <div>
                <Link to="/credits"><Button variant="success my-2" size="sm">Credits</Button></Link>
            </div>
            
        </div>
    );
    }
}

export default Home;