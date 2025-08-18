//import components
import { Link } from 'react-router-dom';

//import styles
import './NavBarMain.css';

type MenuItem = {
  label: string;
  to: string;
  className?: string;
};

function NavBarMain({ className, items }: { className?: string, items: MenuItem[] }) {
  return (
    <nav className={className}>
      <input type="text" placeholder="Search films, actors, directors..." />
      <ul>
        {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={item.className} >{item.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavBarMain;