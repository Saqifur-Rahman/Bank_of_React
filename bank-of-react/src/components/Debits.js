import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import { ListGroup,Button } from 'react-bootstrap';

class Debits extends Component {

    render() {
        return (
            <div class="w3-container">

                
                
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <h1>Debits:</h1>

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
                    {this.props.debits.map(debit => 
                        (   
                            <tr>
                                <td>{debit.id} <t /> </td>
                                <td>{debit.description} <t /> </td>
                                <td>{debit.amount} <t /> </td>
                                <td>{debit.date} <t /> </td>
                            </tr>
                        )
                    )}
                </table>
                
            </div>
        )
    }
}

export default Debits;