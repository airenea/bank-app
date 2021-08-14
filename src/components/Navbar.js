import React, { useState } from 'react';
import bankapplogo from '../logos/bankapp-logo.png'
import PopUpNewUser from './popups/PopUpNewUser.js'
import PopUpAdjust from './popups/PopUpNewUser.js'

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
      <nav class="nav-bar">
        <a href="#" class="nav-logo"><img id="logo" src={bankapplogo} /></a>
        <ul class="nav-menu">
            <li class="nav-item">
                {isOpenUser && <PopUpNewUser
                content={<>
                    <b>Create a New User</b>
                    <p>form here</p>
                </>}
                handleClose={togglePopUpUser}
                />}
                <a onClick={togglePopUpUser} class="nav-link">New User</a>
            </li>
            <li class="nav-item">
                {isOpenAdjust && <PopUpAdjust
                content={<>
                    <b>Adjust the Accounts</b>
                    <p>figure out a function here</p>
                </>}
                handleClose={togglePopUpAdjust}
                />}
                <a onClick={togglePopUpAdjust} class="nav-link">Adjust Accounts</a>
            </li>
            <li class="nav-item">
                <a href="LINK" class="nav-link">Budget App</a>
            </li>
        </ul>
    </nav>
    );
  }

  export default Navbar;
