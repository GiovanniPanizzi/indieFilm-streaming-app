import Header from './../components/major/Header';
import Main from './../components/categories/Main';
import Footer from './../components/major/Footer';

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Networking", to: "/network" },
  { label: "Contact", to: "/contact" },
  { label: "Sign in / Log in", to: "/sign-in", className: "header__nav__main__signIn" },
];

function Categories() {
  return (
    <div className="Categories">
        <Header className="header__fullGray__attachedOnTop" items={menuItems} />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Categories;
