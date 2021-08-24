import React from 'react';
import './App.css'
import NavBar from './components/Navbar'
import UserListTable from './components/UserList'
import UnderNav from './components/UnderNav'
import HelloUser from './components/HelloUser'

let UserDirectory = [
  { id: 1, 
    surname: 'Pilgrim',
    firstname: 'Scott', 
    account: 56021029007678, 
    balance: 37321.38, 
    email: 'scottpilgrim@gmail.com', 
    password: 'password01', 
    creationyear: 2017, 
    creationmonth: '06', 
    creationday: '08' 
  },
  { id: 2, 
    surname: 'Flowers', 
    firstname: 'Ramona', 
    account: 92963683436413, 
    balance: 24238.39, 
    email: 'ramonaflowers@gmail.com', 
    password: 'password02', 
    creationyear: 2021, 
    creationmonth: '08', 
    creationday: '12' },
  { id: 3,
    surname: 'Chau', 
    firstname: 'Knives', 
    account: 21710808100709, 
    balance: 22331.43, 
    email: 'kniveschau@gmail.com', 
    password: 'password03', 
    creationyear: 2013, 
    creationmonth: '11', 
    creationday: '11'  },
  { id: 4, 
    surname: 'Adams', 
    firstname: 'Envy', 
    account: 96621942980069, 
    balance: 32838.01, 
    email: 'envyadams@gmail.com', 
    password: 'password04', 
    creationyear: 2015, 
    creationmonth: '08', 
    creationday: '08'  
  },
  { id: 5, 
    surname: 'Graves', 
    firstname: 'Gideon', 
    account: 34363436714764, 
    balance: 29090.92, 
    email: 'gideongraves@gmail.com', 
    password: 'password05', 
    creationyear: 2016, 
    creationmonth: '02', 
    creationday: '10'  
  },
  { id: 6, 
    surname: 'Lee', 
    firstname: 'Lucas', 
    account: 45572087798148, 
    balance: 89296.12, 
    email: 'lucaslee@gmail.com', 
    password: 'password06', 
    creationyear: 2009, 
    creationmonth: '12', 
    creationday: '27'
  },
  { id: 7, 
    surname: 'Wells', 
    firstname: 'Wallace', 
    account: 40207543570209, 
    balance: 18125.99, 
    email: 'wallacewells@gmail.com', 
    password: 'password07', 
    creationyear: 2020, 
    creationmonth: '05', 
    creationday: '22'
  },
  { id: 8, 
    surname: 'Richter', 
    firstname: 'Roxy', 
    account: 12938104856372, 
    balance: 19232.18, 
    email: 'richterroxy@gmail.com',
    password: 'password08', 
    creationyear: 2015, 
    creationmonth: '01', 
    creationday: '28'
  },
]

class UserListPlus extends React.Component {
  constructor() {
    super();
    this.state = {
      UserDirectory
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    var today = new Date();
    e.preventDefault();
    const
    { UserDirectory } = this.state,
    id = UserDirectory.length + 1,
    surname = this.refs.surname.value,
    firstname = this.refs.firstname.value,
    account = 10000000000000 + Math.floor(Math.random() * 10000000000000),
    balance = Number(Number(this.refs.balance.value).toFixed(3)),
    email = this.refs.email.value,
    password = this.refs.password.value,
    creationyear = JSON.stringify(today.getFullYear()),
    creationmonth = ('0' + (today.getMonth()+1)).slice(-2),
    creationday = JSON.stringify(today.getDate());
    this.setState({
      UserDirectory: [...UserDirectory, {
        id,
        surname,
        firstname,
        account,
        balance,
        email,
        password,
        creationyear,
        creationmonth,
        creationday,
      }]
    }, () => {
      this.refs.id.value = '';
      this.refs.surname.value = '';
      this.refs.firstname.value = '';
      this.refs.account.value = '';
      this.refs.balance.value = '';
      this.refs.email.value = '';
      this.refs.password.value = '';
      this.refs.creationyear.value = '';
      this.refs.creationmonth.value = '';
      this.refs.creationday.value = '';
    });
  }

  submitWithdrawDeposit = (event) => {
    const { UserDirectory } = this.state;
    var index = -1;
    let accountNumber = Number(document.getElementById("currentBalanceAccount").innerHTML)
    for(var i=0; i<UserDirectory.length; i++) {
        if(UserDirectory[i].account == accountNumber) {
            index = i;
            break;
        }
    }
    event.preventDefault();
    const newBalance = this.state.transaction + this.state.balance;
    alert("You have successfully completed a transaction. Your new balance is "+ newBalance);
    document.getElementById("currentBalanceBalance").innerHTML = newBalance;
    this.state.balance = newBalance;
    UserDirectory[index].balance = this.state.balance;
}

  balanceFunctionWithdrawDeposit = (event) => {
      this.setState({transaction: parseFloat(event.target.value)});
  }

  getBalanceWithdrawDeposit = (event) => {
    const { UserDirectory } = this.state;
      var index = -1;
      let accountNumber = event.target.value
      for(var i=0; i<UserDirectory.length; i++) {
          if(UserDirectory[i].account == accountNumber) {
              index = i;
              break;
          }
      }
      document.getElementById("currentBalanceAccount").innerHTML = UserDirectory[index].account
      document.getElementById("currentBalanceSurname").innerHTML = " | " + UserDirectory[index].surname +  ": ₱"
      document.getElementById("currentBalanceBalance").innerHTML = UserDirectory[index].balance;
      this.setState({balance: UserDirectory[index].balance});
      }

      submitTransfer = (event) => {
        const { UserDirectory } = this.state;
        var indexOne = -1;
        var indexTwo = -1;
        let accountNumberOne = Number(document.getElementById("currentBalanceAccountOne").innerHTML)
        let accountNumberTwo = Number(document.getElementById("currentBalanceAccountTwo").innerHTML)
        for(var i=0; i<UserDirectory.length; i++) {
            if(UserDirectory[i].account === accountNumberOne) {
                indexOne = i;
                break;
            }
        }
        for(var i=0; i<UserDirectory.length; i++) {
          if(UserDirectory[i].account === accountNumberTwo) {
              indexTwo = i;
              break;
          }
      }
        event.preventDefault();
        const newBalanceOne = Number(document.getElementById("currentBalanceBalanceOne").innerHTML) - this.state.transactionTransfer;
        const newBalanceTwo = Number(document.getElementById("currentBalanceBalanceTwo").innerHTML) + this.state.transactionTransfer;
        alert("You have successfully completed a transfer.");
        document.getElementById("currentBalanceBalanceOne").innerHTML = newBalanceOne;
        document.getElementById("currentBalanceBalanceTwo").innerHTML = newBalanceTwo;
        this.state.balanceOne = newBalanceOne;
        this.state.balanceTwo = newBalanceTwo;
        UserDirectory[indexOne].balance = this.state.balanceOne;
        UserDirectory[indexTwo].balance = this.state.balanceTwo;
    }
    
      balanceFunctionTransfer = (event) => {
          this.setState({transactionTransfer: parseFloat(event.target.value)});
      }
    
      getBalanceTransferAccountOne = (event) => {
        const { UserDirectory } = this.state;
          var index = -1;
          let accountNumber = event.target.value
          for(var i=0; i<UserDirectory.length; i++) {
              if(UserDirectory[i].account == accountNumber) {
                  index = i;
                  break;
              }
          }
          document.getElementById("currentBalanceAccountOneLabel").innerHTML = "Account 1: "
          document.getElementById("currentBalanceAccountOne").innerHTML = UserDirectory[index].account
          document.getElementById("currentBalanceSurnameOne").innerHTML = " | " + UserDirectory[index].surname +  ": ₱"
          document.getElementById("currentBalanceBalanceOne").innerHTML = UserDirectory[index].balance;
          this.setState({balanceOne: UserDirectory[index].balance});
          }

          getBalanceTransferAccountTwo = (event) => {
            const { UserDirectory } = this.state;
              var index = -1;
              let accountNumber = event.target.value
              for(var i=0; i<UserDirectory.length; i++) {
                  if(UserDirectory[i].account == accountNumber) {
                      index = i;
                      break;
                  }
              }
              document.getElementById("currentBalanceAccountTwoLabel").innerHTML = "Account 2: "
              document.getElementById("currentBalanceAccountTwo").innerHTML = UserDirectory[index].account
              document.getElementById("currentBalanceSurnameTwo").innerHTML = " | " + UserDirectory[index].surname +  ": ₱"
              document.getElementById("currentBalanceBalanceTwo").innerHTML = UserDirectory[index].balance;
              this.setState({balanceTwo: UserDirectory[index].balance});
              }

  render() {
    const { UserDirectory } = this.state;
    return (   
      <div>
        <div className="createUserForm">
        <span className="sectionHeader">Create User</span><br />
        <form onSubmit={this.handleSubmit}>
          <div className="formQuestion">
          <label>Surname</label>
          <input type="text" ref="surname" required placeholder="Surname" pattern="[A-zÀ-ž\s]*" /><br />
          </div>
          <div className="formQuestion">
          <label>First Name</label>
          <input type="text" ref="firstname" required placeholder="First Name" pattern="[A-zÀ-ž\s]*" /><br />
          </div>
          <div className="formQuestion">
          <label>Initial Balance</label>
          <input type="number" step="0.01" placeholder='0.00' required ref="balance" /><br />
          </div>
          <div className="formQuestion">
          <label>Email</label>
          <input type="email" ref="email" required placeholder="Email" /><br />
          </div>
          <div className="formQuestion">
          <label>Password</label>
          <input type="password" ref="password" required placeholder="Password" /><br />
          </div>
          <span ref="account" />
          <span ref="id" />
          <span ref="creationday" />
          <span ref="creationmonth" />
          <span ref="creationyear" />
          <button id="submitCreate" type="submit">Submit</button>
        </form>
        </div>
        <UserListTable users={UserDirectory}/>
          <div className="withdraw-deposit">
          <span className="sectionHeader">Withdraw/Deposit</span><br /><br />
            <select id="withdraw-deposit-accountlist" onChange={this.getBalanceWithdrawDeposit}>
            <option value="" disabled selected>Select an account.</option>
              {UserDirectory.map((key, index) => (
                <option value={UserDirectory[index].account}>{UserDirectory[index].account}</option>
              ))}
            </select>
          <br /><br />
          <div id="currentBalance"><span id="currentBalanceAccount"></span><span id="currentBalanceSurname"></span><span id="currentBalanceBalance"></span></div><br />
          <form onSubmit={this.submitWithdrawDeposit}>
           <label>Transaction</label>
          <input
              type="number" 
              step="0.01"
              onChange={this.balanceFunctionWithdrawDeposit}
          /><br /><br />
          <button id="submitWithdrawDeposit" type="submit">Submit</button>
          </form>
          </div>
          <div className="transfer">
            <span className="sectionHeader">Transfer Between Accounts</span><br /><br />
            <select id="transfer-accountone" onChange={this.getBalanceTransferAccountOne}>
            <option value="" disabled selected>Select an account.</option>
              {UserDirectory.map((key, index) => (
                <option value={UserDirectory[index].account}>{UserDirectory[index].account}</option>
              ))}
            </select><span id="transfer-arrow">→</span>
            <select id="transfer-accounttwo" onChange={this.getBalanceTransferAccountTwo}>
            <option value="" disabled selected>Select an account.</option>
              {UserDirectory.map((key, index) => (
                <option value={UserDirectory[index].account}>{UserDirectory[index].account}</option>
              ))}
            </select>
          <br /><br />
          <div id="currentBalanceOne"><span id="currentBalanceAccountOneLabel"></span><span id="currentBalanceAccountOne"></span><span id="currentBalanceSurnameOne"></span><span id="currentBalanceBalanceOne"></span></div><br />
          <div id="currentBalanceTwo"><span id="currentBalanceAccountTwoLabel"></span><span id="currentBalanceAccountTwo"></span><span id="currentBalanceSurnameTwo"></span><span id="currentBalanceBalanceTwo"></span></div><br />
          <form onSubmit={this.submitTransfer}>
           <label>Transaction</label>
          <input
              type="number" 
              step="0.01"
              onChange={this.balanceFunctionTransfer}
          /><br /><br />
          <button id="submitTransfer" type="submit">Submit</button>
          </form>
          </div>
        </div>

    ) 
  }
}



function App() {
    return (
    <div className="pageBody">
    <NavBar />
    <UnderNav />
    <div className="pageWhole">
    <HelloUser />
    <UserListPlus />
    </div>
    </div>
  );
}

  export default App;