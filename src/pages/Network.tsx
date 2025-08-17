import Header from './../components/major/Header';
import Main from './../components/network/Main';
import Footer from './../components/major/Footer';

function Network() {
  return (
    <div className="Network">
        <Header className="header__fullGray__attachedOnTop" />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Network;