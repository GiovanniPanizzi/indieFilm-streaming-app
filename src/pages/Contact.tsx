import Header from './../components/major/Header';
import Main from './../components/contact/Main';
import Footer from './../components/major/Footer';

function Contact() {
  return (
    <div className="Contact">
        <Header className="header__fullGray__attachedOnTop" />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Contact;