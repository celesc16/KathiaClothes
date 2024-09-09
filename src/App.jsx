import './App.css';
import Init from './views';
import NavBarComponent from './components/layout/navbar';
import Products from './views/products';
import Contact from './views/contact';
import About from './views/about';
import Footer from './components/layout/footer';
import SigIn from './auth/signin';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path='/' element= {<Init/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/sigin' element={< SigIn />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
