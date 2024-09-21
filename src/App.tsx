import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import {getProduct} from './services/ProductService';
import { Col, Container, Row } from 'react-bootstrap';

interface IProduct {
  name: string;
  price: string;
  description: string;
  category: string;
}

const App:React.FC = () => {

  const [products, setProducts] = useState<IProduct[]>([])
  const [category, setCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])


  useEffect(()=> {
    const allProducts = getProduct();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    // console.log(allProducts);
  }, [])

  return (
    <Container>
      <h1 className='my-3'>Product List</h1>
      <Row className='mb-2'>
        <Col md={6}></Col>
        <Col md={6}></Col>
      </Row>
      <Row>
        {filteredProducts.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} className='mb-3'>
            <ProductCard {...product} />
          </Col> 
        ))}
      </Row>
    </Container>
  );
}

export default App;
