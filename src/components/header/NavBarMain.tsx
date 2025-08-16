//import components

//import styles
import './NavBarMain.css';

function NavBarMain({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <input type="text" placeholder="Search films, actors, directors..." />
      <ul>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a href="/networking">Networking</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/sign-in">Sign in / Log in</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMain;