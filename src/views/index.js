import img1 from './products/img/img1.jpg'
import ProductsInit from './products/components/recommend';

export default function Init(){
  return (
    <>
      <ProductsInit 
        image={img1}
        model={'Blusa'}
        price={'$500'}
        
      />    

      <ProductsInit 
        image={img1}
        model={'Blusa'}
        price={'$500'}
      />    

    </>
  )
};