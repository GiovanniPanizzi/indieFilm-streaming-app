//import components
import { Link } from 'react-router-dom';
import { useState } from "react";

//import styles
import './NavBarMain.css';

type MenuItem = {
  label: string;
  to: string;
  className?: string;
};

function NavBarMain({ className, items }: { className?: string, items: MenuItem[] }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={className}>
      <input type="text" placeholder="Search films, actors, directors..." />
      <ul className="main__nav__bar__ul">
        {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={item.className} >{item.label}</Link>
            </li>
          ))}
      </ul>
      <div className={`hamburger__nav__icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="hamburger__nav__icon__line"></span>
          <span className="hamburger__nav__icon__line"></span>
      </div>
    </nav>
  );
}

export default NavBarMain;