import React from 'react';
import BodyHeader from "./BodyHeader"
import Products from './Products';
import Deals from './Deals';

const Body = () => {
  return (
    <div className="body">
        <BodyHeader/>
        <Products/>
        <Deals/>
    </div>
  );
};

export default Body;