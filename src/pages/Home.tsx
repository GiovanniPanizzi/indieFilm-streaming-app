import Header from './../components/major/Header';

function Home() {
  return (
    <div className="Home">
        <Header className="header__fullGray__attachedOnTop" />

        {/*to implement*/}

        <main className="home__main">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content area.</p>
        </main>
        <footer className="home__footer">
            <p>&copy; 2025 Your Company</p>
        </footer>
    </div>
  );
}

export default Home;
