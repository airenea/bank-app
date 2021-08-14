import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import UnderNav from './components/UnderNav'
import HelloUser from './components/HelloUser'
import TransactionHistory from './components/TransactionHistory'

function App() {

  return (
    <div className="pageBody">
    <Navbar />
    <UnderNav />
    <div className="pageWhole">
    <HelloUser />
    <UserList />
    <TransactionHistory />
    </div>
    </div>
  );
}

export default App;