import img1 from '../../assets/image/img1.jpg'
import img2 from '../../assets/image/img2.jpg'
import { NavLink } from 'react-router-dom'
import '../layout/style/layouts.css'


export default function ProductsRecommend(){ 

  const Products = [
    {
      "id": 1,
      "name": "Camisa Casual",
      "price": 24.6,
      "category" : "camisas",
      "recommended": true,
      "offer": false,
      "image": img1,
    },
    {
      "id": 2,
      "name": "Remera de Vestir",
      "price": 24.5,
      "category" : "remera",
      "recommended": false,
      "offer": true,
      "image": img2
    },
    {
      "id": 3,
      "name": "Camisa Casual",
      "price": 24.5,
      "category" : "camisas",
      "recommended": false,
      "offer": true,
      "image": img1,
    },
    {
      "id": 4,
      "name": "Remera de Vestir",
      "price": 24.6,
      "category" : "remera",
      "recommended": true,
      "offer": false,
      "image": img2
    },
    {
      "id": 1,
      "name": "Camisa Casual",
      "price": 24.6,
      "category" : "camisas",
      "recommended": true,
      "offer": false,
      "image": img1,
    },
    {
      "id": 2,
      "name": "Remera de Vestir",
      "price": 24.5,
      "category" : "remera",
      "recommended": false,
      "offer": true,
      "image": img2
    },
    {
      "id": 3,
      "name": "Camisa Casual",
      "price": 24.5,
      "category" : "camisas",
      "recommended": false,
      "offer": true,
      "image": img1,
    },
    {
      "id": 4,
      "name": "Remera de Vestir",
      "price": 24.6,
      "category" : "remera",
      "recommended": true,
      "offer": false,
      "image": img2
    }
    // Más productos aquí...
  ]

  const recommendedProducts = Products.filter(product => product.recommended);

  return(
    <div className='container recommend-products'>
      <h2 className='text-center p-4'>Productos Recomedado</h2>
      <div className='row'>
        {recommendedProducts.map(product =>(
          <div className='col-md-4' key={product.id}>
            <div className="card r-image mt-3">
              <img src={product.image}  className="card-img-top" alt={product.name} />
              <div className="card-body m-2">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <NavLink href="#" className="btn btn-primary">Ver productos</NavLink>
              </div>
            </div>
          </div>  
        ))}
      </div>
    </div>
  )
};