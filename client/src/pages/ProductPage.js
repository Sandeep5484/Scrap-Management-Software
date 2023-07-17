import React from 'react';
import Card from "../components/Card";

import "../Productpage.css";
import cardData from "../components/CardData";

const ProductPage = () => {
  return (
    <>
    <div className="app">
      <h1>Our Products</h1>
    <Card details={cardData}/>
    </div>
    </>
  );
};

export default ProductPage
