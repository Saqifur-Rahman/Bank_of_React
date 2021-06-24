import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import { Card, Form, Row, Col, ListGroup, Button } from 'react-bootstrap';

class Debits extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
            amount: null,
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        // alert('Description: '+this.state.description+', Amount: '+this.state.amount);
        e.preventDefault();

        // validation
        if(this.state.description.length<1 || parseFloat(this.state.amount)<=0 || this.state.amount==null) {
            alert("Inavlid Description or Amount")
            return this.setState({redirect: true})
        }

        this.props.addDebit(this.state.description, this.state.amount)
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) {
            this.setState({ 
                description: '', 
                amount: '', 
                redirect: false
            })
        }

        return (
            <div class="w3-container">
                
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <h1>Debits:</h1>
                <br />

                <Card style={{width: '75%'}}>
                    <Card.Body>
                        <Row>
                            <Col xs lg="2">
                                <Link to="/"><Button variant="primary mt-2" size="md">Return to Home</Button></Link>
                            </Col>
                            <Col>
                                <ListGroup style={{width: 175}}>
                                    <ListGroup.Item action>
                                        <AccountBalance accountBalance={this.props.accountBalance}/>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <hr/>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Control 
                                            placeholder="Description" 
                                            name="description"
                                            onChange={this.handleChange}
                                            value={this.state.description}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs lg="3">
                                    <Form.Group className="mb-3" controlId="amount">
                                        <Form.Control
                                            placeholder="Amount"
                                            name="amount"
                                            onChange={this.handleChange}
                                            value={this.state.amount} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Button variant="danger mt-3" size="sm" type="submit">
                                Add Debit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <br />

                <table className="w3-table-all" style={{width: '75%'}}>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {this.props.debits.map(debit => 
                        (   
                            <tr>
                                <td>{debit.description} <t /> </td>
                                <td>{debit.amount} <t /> </td>
                                <td>{debit.date} <t /> </td>
                            </tr>
                        )
                    )}
                </table>
                <br /><br />
                
            </div>
        )
    }
}

export default Debits;