import React from "react";
import productsData from "./data/productsData.json";
import Product from "./Product";
const Products = () => {
  return (
    <div className="body-products">
      {productsData.map((item) => 
      {
        return <Product props={item} key={item.id} />;
      })}
    </div>
  );
};

export default Products;
