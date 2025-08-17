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
          <Link to="/categories"> Categories </Link>
        </li>
        <li>
          <Link to="/network">Networking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in / Log in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMain;