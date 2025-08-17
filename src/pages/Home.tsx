import Header from './../components/major/Header';
import Main from './../components/home/Main';
import Footer from './../components/major/Footer';

function Home() {
  return (
    <div className="Home">
        <Header className="header__fullGray__attachedOnTop" />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Home;