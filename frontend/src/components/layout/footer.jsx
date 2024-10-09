import { NavLink } from "react-router-dom";

export default function Footer(){

  return(
    <footer className="bg-dark p-4 mt-4">
        <div className="container">
          <nav className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <NavLink className="navbar-brand text-white fs-2" to={'./'} >Kathia Clothes</NavLink>
              <div className="footer-icons m-4 ms-0">
                <a className="" href="/"><i className="bi bi-instagram"></i></a>
                <a className="" href="/"><i className="bi bi-facebook"></i></a>
                <a className="" href="/"><i className="bi bi-telephone"></i></a>
              </div>
            </div>

            <div className= 'col-md-6 col-lg-3 col-12 ft-2 '>
              <h5 className="text-white">Informacion de Contacto</h5>
              <ul className="footer-list ps-0">
                <li><a className='nav-link ' href="tel:+1234567890" >+123 456 7890</a></li>
                <li><a className='nav-link' href="mailto:soporte@tienda.com">soporte@tienda.com</a></li>
                <li><a className='nav-link' href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA" target="_blank" rel="noopener noreferrer">
                      Ver en Google Maps
                    </a>
                </li>
              </ul>
            </div>

            <div className= 'col-md-6 col-lg-4 col-12 ft-3'>
              <h5 className="text-white">Titulos Sugeridos</h5>
              <ul className="footer-list ps-0">
                <li><NavLink className='nav-link' >Politica de Privacidad</NavLink></li>
                <li><NavLink className='nav-link' >Terminos Y Condiciones</NavLink></li>
                <li><NavLink className='nav-link' >Politica de Devoluciones</NavLink>
                </li>
              </ul>
            </div>

          </nav>
        </div>

    </footer>
  )

}