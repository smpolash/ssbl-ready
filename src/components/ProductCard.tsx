import React, { useState } from "react";

interface IProduct {
  name: string;
  price: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<IProduct> = ({name, price, description, category,}) => {
  return (
    <div className="card" style={{width:'100%', height:'100%'}}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
