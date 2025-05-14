import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './header/Header';
import Home from './pages/Home';
import Journey from './pages/Journey';
import ScrollToTop from './element/ScrollToTop';
import Footer from './footer/Footer';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
