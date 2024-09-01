import { NavLink } from "react-router-dom";

export default function Footer(){

  return(
    <footer>
      <div className="bg-dark p-4">
        <nav className="row">
          <div className="logo">
            <NavLink className="navbar-brand text-white fs-2" to={'./'} >Kathia Clothes</NavLink>
          </div>

          <>
          </>

          <div className= 'icons-redsocial'>
            <NavLink className='color' to = {''}  ><i class="bi bi-instagram"></i></NavLink>
            <NavLink className='color' to={''}  ><i class="bi bi-facebook"></i></NavLink>
            <NavLink className='color' to={''} ><i class="bi bi-telephone"></i></NavLink>
          </div>

        </nav>
      </div>

    </footer>
  )

}