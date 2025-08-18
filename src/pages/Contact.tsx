import Header from './../components/major/Header';
import Main from './../components/contact/Main';
import Footer from './../components/major/Footer';

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Networking", to: "/network" },
  { label: "Sign in / Log in", to: "/sign-in", className: "header__nav__main__signIn" },
];

function Contact() {
  return (
    <div className="Contact">
        <Header className="header__fullGray__attachedOnTop" items={menuItems} />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Contact;