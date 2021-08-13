import bankapplogo from '../logos/bankapp-logo.png'

function Navbar() {
    return (
      <nav class="nav-bar">
        <a href="#" class="nav-logo"><img id="logo" src={bankapplogo} /></a>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="LINK" class="nav-link">All Users</a>
            </li>
            <li class="nav-item">
                <a href="LINK" class="nav-link">New User</a>
            </li>
            <li class="nav-item">
                <a href="LINK" class="nav-link">Adjust Accounts</a>
            </li>
            <li class="nav-item">
                <a href="LINK" class="nav-link">Budget App</a>
            </li>
        </ul>
    </nav>
    );
  }

  export default Navbar;
