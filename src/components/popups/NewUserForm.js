import React from 'react';
import UserDirectory from '../UserDirectory'
class NewUserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: '',
          surname: '',
          firstname: '',
          account: '',
          balance: '',
          email: '',
          password: '',
          creationyear: '',
          creationmonth: '',
          creationday: '',
        };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      UserDirectory.push(this.state)
      console.log(this.state)
      console.log(UserDirectory)
      alert("You have created an account for" + this.state.firstname + ' ' + this.state.surname);
    }
    surnameFunction = (event) => {
        this.setState({surname: event.target.value});
        const accountNumber = 10000000000000 + Math.floor(Math.random() * 10000000000000);
        this.setState({account: accountNumber});
        var today = new Date();
        this.setState({creationyear: JSON.stringify(today.getFullYear())});
        this.setState({creationmonth: ('0' + (today.getMonth()+1)).slice(-2)});
        this.setState({creationday: JSON.stringify(today.getDate())});
        this.setState({id: UserDirectory.length + 1});
    }
    firstnameFunction = (event) => {
        this.setState({firstname: event.target.value});
    }
    emailFunction = (event) => {
        this.setState({email: event.target.value});
    }
    passwordFunction = (event) => {
        this.setState({password: event.target.value});
    }
    balanceFunction = (event) => {
        this.setState({balance: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>You are creating an account for {this.state.firstname} {this.state.surname}.</h1>
        <p>Enter your name, and submit:</p>
        <label>First Name</label>
        <input
          type='text'
          onChange={this.firstnameFunction}
        /><br />
        <label>Surname</label>
        <input
          type='text'
          onChange={this.surnameFunction}
        /><br />
        <label>Email</label>
        <input
          type='text'
          onChange={this.emailFunction}
        /><br />
        <label>Password</label>
        <input
          type='text'
          onChange={this.passwordFunction}
        /><br />
        <label>Balance</label>
        <input
          type='text'
          onChange={this.balanceFunction}
        /><br />
        <input
          type='submit'
        />
        </form>
      );
    }
  }
  

  export default NewUserForm;