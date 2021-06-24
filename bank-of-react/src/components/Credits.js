import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

class Credits extends Component {
    render() {
        return (
            <div class="w3-container">

                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <h1>Credits:</h1>
                
                <Link to="/"><Button variant="primary" size="sm">Return to Home</Button></Link>
                <ListGroup style={{width: 175, padding: 5, paddingLeft: 0}}>
                    <ListGroup.Item action> 
                        <AccountBalance accountBalance={this.props.accountBalance}/>
                    </ListGroup.Item>
                </ListGroup>
                <br />

                <table class="w3-table-all">
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {this.props.credits.map(credit => 
                        (   
                            <tr>
                                <td>{credit.id} <t /> </td>
                                <td>{credit.description} <t /> </td>
                                <td>{credit.amount} <t /> </td>
                                <td>{credit.date} <t /> </td>
                            </tr>
                        )
                    )}
                </table>

            </div>
        )
    }
}

export default Credits;