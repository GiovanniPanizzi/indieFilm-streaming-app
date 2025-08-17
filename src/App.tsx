// import pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Network from './pages/Network';
import SignIn from './pages/SignIn';

// import styles
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/network" element={<Network />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

// export component
export default App;