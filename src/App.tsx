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
      <h1 className='my-3 fw-bold'>Product List</h1>
      <Row className="mb-2">
        <Col className='d-flex flex-row justify-content-between align-items-end'>
          <h5>Total Products: {totalProductCount}</h5>
          <h6>Showing: {filteredProductCount} {category !== 'All Products' ? `in ${category}` : 'Products'}</h6>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col md={6}>
          <Form.Label className='mb-0'>Search by Category</Form.Label>
          <Form.Group className='mb-2'>
            <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)} >
              <option value="All Products">All Products</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-2'>
            <Form.Label className='mb-0'>Search by Name</Form.Label>
            <Form.Control type='text' placeholder='Type product name...' value={searchKeys} onChange={(e) => setSearchKeys(e.target.value)} />
          </Form.Group>
        </Col>
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
