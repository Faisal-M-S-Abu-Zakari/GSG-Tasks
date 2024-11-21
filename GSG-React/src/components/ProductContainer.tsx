
import { Container, Row } from 'react-bootstrap'
import Product from './Product'
import { useEffect, useState } from 'react'
interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
}
const ProductContainer = () => {
  const [products  , setProducts] = useState<ProductType[]>([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then(data=>setProducts(data))
  },[])
  return (
    <Container>
      <Row className='py-3'>
        {products.map((product) => {
          return (
            <Product 
              
              key={product.id} 
              title={product.title} 
              price={product.price} 
              desc={product.description} 
    />
  );
})}
        
      </Row>
    </Container>
  )
}

export default ProductContainer
