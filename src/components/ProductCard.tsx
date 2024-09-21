import React, { useState } from "react";
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';


interface IProduct {
  name: string;
  price: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<IProduct> = ({name, price, description, category,}) => {
  
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);
  
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
    <div className="card" style={{width:'100%', height:'100%'}}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">{category}</p>
      </div>
    </div>
    </ResizableBox>
  );
};

export default ProductCard;
