import React, { useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';


interface IProduct {
  name: string;
  price: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<IProduct> = ({name, price, description, category,}) => {
  
  const [width, setWidth] = useState(305);
  const [height, setHeight] = useState(350);
  
  return (
    <ResizableBox
      width={width}
      height={height}
      onResize={(event, { size }) => {
        setWidth(size.width);
        setHeight(size.height);
      }}
      resizeHandles={['se']}
      minConstraints={[200, 300]}
      maxConstraints={[600, 800]}
    >
    <Card className="card h-100 w-100 shadow-sm border-info-subtle">
      <Card.Img className="opacity-75" variant="top" src="images/placeholder.jpg" />
      <Card.Body className="card-body">
        <div className="d-flex justify-content-between align-items-end">
          <Card.Title className="text-info">{name}</Card.Title>
          <Card.Subtitle className="card-subtitle mb-2 text-danger fs-5">{price}</Card.Subtitle>
        </div>
        <Card.Text className="lh-1 mt-1 text-muted">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0"><Badge bg="light" text="dark" className="fs-6 fw-normal">{category}</Badge> </Card.Footer>
    </Card>
    </ResizableBox>
  );
};

export default ProductCard;
