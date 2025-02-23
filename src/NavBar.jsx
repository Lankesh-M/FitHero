import './css/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
    
    return (
      <header>
        <nav>
            <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/progress-tracker">Progress Tracker</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </nav>
      </header>
    );
  };


export default NavBar;