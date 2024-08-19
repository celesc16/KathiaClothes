import './App.css';
import Init from './views'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'./'} >Kathia Clothes</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-white" aria-current="page" to= {'./'}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={'/contact'}>Contacto</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white" to = {'/product'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={'/coverall'}>Buzos</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/jeans'}>Jeans</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/jackets'} >Camperas</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/t-shirts'}>Remeras</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled text-white" aria-disabled="true">Como Comprar</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element= {<Init/>} />
      </Routes>

    </div>
  );
}

export default App;
