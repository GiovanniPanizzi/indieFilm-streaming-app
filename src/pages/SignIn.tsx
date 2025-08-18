import Header from '../components/major/Header';
import Main from '../components/network/Main';
import Footer from '../components/major/Footer';

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Networking", to: "/network" },
  { label: "Contact", to: "/contact" },
];

function SignIn() {
  return (
    <div className="SignIn">
        <Header className="header__fullGray__attachedOnTop" items={menuItems} />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default SignIn;