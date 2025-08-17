//import components
import { Link } from 'react-router-dom';

//import styles
import './NavBarMain.css';

function NavBarMain({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <input type="text" placeholder="Search films, actors, directors..." />
      <ul>
        <li>
          <Link to="/Categories"> Categories </Link>
        </li>
        <li>
          <Link to="/">Networking</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Sign in / Log in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMain;