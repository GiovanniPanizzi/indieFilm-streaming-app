//import components
import Logo from './../header/Logo';
import NavBarMain from './../header/NavBarMain';
import SearchBar from './../header/SearchBar';

//header
function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="header__container">
        <Logo className="header__logo" />
        <NavBarMain className="header__nav__bar__main" />
        <SearchBar className="header__search__bar" />
      </div>
    </header> 
  )
}

export default Header;