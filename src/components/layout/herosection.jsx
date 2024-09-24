import { NavLink } from 'react-router-dom';
import hero1 from '../../assets/image/hero1m.jpg'; // Asegúrate de que las rutas sean correctas
import hero2 from '../../assets/image/hero2.jpg';
import hero3 from '../../assets/image/hero3.jpg';
import './style/layouts.css'

export default function HeroSection(){
  return(
    <div id="hero-carousel" className="hero-block carousel slide" data-bs-ride = "carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img src={hero1} className="carousel-hero d-block w-100" alt='imageneshero' />
          <div className="carousel-caption" >
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <NavLink role='button' className='btn btn-secondary px-4 py-2 text-uppercase' >Mas Info</NavLink>
          </div>
        </div>
        <div className="carousel-item">
          <img src={hero2} className="carousel-hero d-block w-100" alt='imageneshero' />
          <div className="carousel-caption" >
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <NavLink role='button' className='btn btn-secondary px-4 py-2 text-uppercase' >Mas Info</NavLink>
          </div>
        </div>
        <div className="carousel-item">
          <img src={hero3} className="carousel-hero d-block w-100" alt='imageneshero' />
          <div className="carousel-caption" >
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <NavLink role='button' className='btn btn-secondary px-4 py-2 text-uppercase' >Mas Info</NavLink>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
};