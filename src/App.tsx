import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import {getProduct} from './services/ProductService';
import { Col, Container, Form, Row } from 'react-bootstrap';

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
  const [searchKeys, setSearchKeys] = useState('');

  const totalProductCount = products?.length;
  const filteredProductCount = filteredProducts?.length;

  useEffect(()=> {
    const allProducts = getProduct();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    // console.log(allProducts);
  }, [])

  useEffect(() => {
    let P = products;

    if (searchKeys){
      P = P.filter((product) => {
        return product.name.toLowerCase().includes(searchKeys.toLowerCase());
      });
    }

    if(category !== "All Products") {
      P = P.filter((product) => product.category === category);
    }

    setFilteredProducts(P);

  }, [searchKeys, category, products]);

  return (
    <Container>
      <h1 className='mt-4 mb-0 fw-bold text-info'>Products</h1>      
      <Row className='mb-2'>
        <Col md={6} className='d-flex flex-row justify-content-between align-items-end'>
          <p className='d-inline-flex gap-3 mb-1'>
            <span className=''>Total: <strong>{totalProductCount} Products</strong></span>
            <span>Showing: <strong>{filteredProductCount} {category !== 'All Products' ? `in ${category}` : 'Products'}</strong></span>
          </p>
        </Col>
        <Col md={3}>
          <Form.Group className='mb-2'>
            <Form.Label className='mb-1'>Search by Name</Form.Label>
            <Form.Control className='form-control-sm' type='text' placeholder='Type product name...' value={searchKeys} onChange={(e) => setSearchKeys(e.target.value)} />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Label className='mb-1'>Search by Category</Form.Label>
          <Form.Group className='mb-2'>
            <Form.Control as="select" className='form-control-sm' value={category} onChange={(e) => setCategory(e.target.value)} >
              <option value="All Products">All Products</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </Form.Control>
          </Form.Group>
        </Col>        
      </Row>
      <hr className='mb-3 mt-2 border' />
      <Row xs={1} md={3} xl={4} className="g-4">
        {filteredProducts.map((product, index) => (
          <Col key={index} className='mb-0'>
            <ProductCard {...product} />
          </Col> 
        ))}
      </Row>
    </Container>
  );
}

export default App;
