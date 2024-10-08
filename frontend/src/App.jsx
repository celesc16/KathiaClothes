import './App.css';
import Init from './views';
import Navbar from './components/layout/navbar';
import Products from './views/products';
import Contact from './views/contact';
import Footer from './components/layout/footer';
import SigIn from './auth/signin';

import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";


function App() {

  const location = useLocation()

  const hideNavbarFooter = ['/sigin' , 'sigout']

  const shouldHideNavbarFooter = hideNavbarFooter.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element= {<Init/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/sigin' element={< SigIn />} />
      </Routes>

      {!shouldHideNavbarFooter && <Footer />}
      
    </div>
  );
}

export default App;
