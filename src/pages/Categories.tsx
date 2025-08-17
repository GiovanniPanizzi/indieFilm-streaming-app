import Header from './../components/major/Header';
import Main from './../components/categories/Main';
import Footer from './../components/major/Footer';

function Categories() {
  return (
    <div className="Categories">
        <Header className="header__fullGray__attachedOnTop" />
        <Main className="home__main__light" />
        <Footer className="footer" />
    </div>
  );
}

export default Categories;
