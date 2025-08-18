//import components
import Logo from './../header/Logo';
import NavBarMain from './../header/NavBarMain';
//import styles
import './Header.css';

//header
type HeaderProps = {
  className? : string;
  items: { label: string; to: string; className?: string;}[];
};

function Header({ className, items }: HeaderProps) {
  return (
    <header className={className}>
      <div className="header__container">
        <Logo className="header__logo" />
        <NavBarMain className="header__nav__bar__main" items={items}/>
      </div>
    </header>
  );
}

export default Header;