import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
    
class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: "LOADING..",
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  calculateBalance =  () => {
    let total_debits = 0
    let total_credits = 0
    this.state.debits.map(debit => total_debits += debit.amount)
    this.state.credits.map(credit => total_credits += credit.amount)
    // console.log(total_credits, total_debits)
    return parseFloat(total_credits-total_debits).toFixed(2)
  }

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
    const DebitsComponent = () => (<Debits debits={this.state.debits} accountBalance={this.state.accountBalance} />)
    const CreditsComponent = () => (<Credits credits={this.state.credits} accountBalance={this.state.accountBalance}/>)

    // console.log(this.state.debits);
    // console.log(this.state.credits);

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