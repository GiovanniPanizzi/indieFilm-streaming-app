import Header from './../components/major/Header';
import Main from './../components/network/Main';
import Footer from './../components/major/Footer';

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Contact", to: "/contact" },
  { label: "Sign in / Log in", to: "/sign-in", className: "header__nav__main__signIn" },
];

function Network() {
  return (
    <div className="Network">
        <Header className="header__fullGray__attachedOnTop" items={ menuItems } />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Network;