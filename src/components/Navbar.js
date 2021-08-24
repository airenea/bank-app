import React from 'react';
import bankapplogo from '../logos/bankapp-logo.png'

function Navbar() {

    return (
      <nav className="nav-bar">
        <div className="nav-logo"><img id="logo" alt="logo" src={bankapplogo} /></div>
    </nav>
    );
  }

  export default Navbar;
