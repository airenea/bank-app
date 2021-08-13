import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import UnderNav from './components/UnderNav'
import HelloUser from './components/HelloUser'


function App() {
  return (
    <div className="pageWhole">
    <Navbar />
    <UnderNav />
    <HelloUser />
    <UserList />
    </div>
  );
}

export default App;
