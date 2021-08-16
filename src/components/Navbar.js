import React, { useState } from 'react';
import bankapplogo from '../logos/bankapp-logo.png'
import PopUpNewUser from './popups/PopUpNewUser.js'
import PopUpAdjust from './popups/PopUpNewUser.js'
import NewUserForm from './popups/NewUserForm'

function Navbar() {
    const [isOpenUser, setIsOpenUser] = useState(false);
    const [isOpenAdjust, setIsOpenAdjust] = useState(false);
 
    const togglePopUpUser = () => {
    setIsOpenUser(!isOpenUser);
    }

    const togglePopUpAdjust = () => {
    setIsOpenAdjust(!isOpenAdjust);
    }

    return (
      <nav className="nav-bar">
        <button className="nav-logo"><img id="logo" alt="logo" src={bankapplogo} /></button>
        <ul className="nav-menu">
            <li className="nav-item">
                {isOpenUser && <PopUpNewUser
                content={<>
                    <b>Create a New User</b>
                    <NewUserForm />
                </>}
                handleClose={togglePopUpUser}
                />}
                <button onClick={togglePopUpUser} className="nav-link">New User</button>
            </li>
            <li className="nav-item">
                {isOpenAdjust && <PopUpAdjust
                content={<>
                    <b>Adjust the Accounts</b>
                    <p>figure out a function here</p>
                </>}
                handleClose={togglePopUpAdjust}
                />}
                <button onClick={togglePopUpAdjust} className="nav-link">Adjust Accounts</button>
            </li>
            <li className="nav-item">
                <button className="nav-link">Budget App</button>
            </li>
        </ul>
    </nav>
    );
  }

  export default Navbar;
