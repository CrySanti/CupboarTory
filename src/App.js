import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EmailSubmissionForm from './components/EmailSubmissionForm';

class App extends Component {
  render() {
    return (
      <div>
      <h1 className="App-title">CupboarTory
      </h1>
      <p className="App-intro">
      Create a Personal Inventory of any items in your Home
      <br/>From your Knick Knacks to your Cupboard!
      <br/>All Carefully Added by You and Stored in Cupboartory!
      <br />
      <br/>
      <br />
      Enter your Email & 
      <br/>Become a Beta Tester! 
      <EmailSubmissionForm />
      </p>
      </div>
    );
  }
}

export default App;
