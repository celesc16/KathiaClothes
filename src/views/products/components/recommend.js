import { NavLink } from 'react-router-dom';


export default function ProductsInit({ image , model , price }){
  return (
    <div className='m-5 d-flex'>
      <h2>Productos recomendados</h2>
      <div className="card" style={{ width: '18rem' }}>
        <img src= {image} alt="Product" />
        <div className="card-body">
          <h5 className="card-title">${model}</h5>
          <p className="card-text"><span>${price}</span></p>
          <NavLink className="btn btn-secondary" to={'./'}><i class="bi bi-bag"></i></NavLink>
        </div>
      </div>

    </div>
  )
};