import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import { v4 as uuidv4 } from 'uuid';
    
class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: "LOADING..",
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      // state variable to store array of all debits
      debits: [],
      // state variable to store array of all credits
      credits: []
    }
  }

  // Function - For mock Sign in 
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // Function - To calculate the latest accountBalance
  calculateBalance =  () => {
    let total_debits = 0
    let total_credits = 0
    this.state.debits.map(debit => total_debits += debit.amount)
    this.state.credits.map(credit => total_credits += credit.amount)
    // console.log(total_credits, total_debits)
    return parseFloat(total_credits-total_debits).toFixed(2)
  }

  // Function - Add new debit transaction and update
  addDebit = (description, amount) => {
    const d = new Date()
    const transaction = {
      "id": uuidv4(),
      "description": description,
      "amount": parseFloat(amount),
      "date": d.toISOString()
    }
    this.state.debits.push(transaction)
    this.setState({ accountBalance: this.calculateBalance() })
  }

  // Function - Add new credit transaction and update
  addCredit = (description, amount) => {
    const d = new Date()
    const transaction = {
      "id": uuidv4(),
      "description": description,
      "amount": parseFloat(amount),
      "date": d.toISOString()
    }
    this.state.credits.push(transaction)
    this.setState({ accountBalance: this.calculateBalance() })
  }

  // lifecycle method where API requests should go
  async componentDidMount() {
    const debits_url = "https://moj-api.herokuapp.com/debits";
    const credits_url = "https://moj-api.herokuapp.com/credits";
    
    const debits_response = await fetch(debits_url);
    const debits_data = await debits_response.json();
    this.setState({ debits: debits_data })
    // console.log(debits_data)

    const credits_response = await fetch(credits_url);
    const credits_data = await credits_response.json();
    this.setState({ credits: credits_data })
    // console.log(credits_data)

    this.setState({ accountBalance: this.calculateBalance() })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  accountBalance={this.state.accountBalance}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits debits={this.state.debits} accountBalance={this.state.accountBalance} addDebit={this.addDebit} />)
    const CreditsComponent = () => (<Credits credits={this.state.credits} accountBalance={this.state.accountBalance} addCredit={this.addCredit}/>)

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;