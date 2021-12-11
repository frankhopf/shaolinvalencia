import React from 'react';
import './Shop.css';
import ShopCards from '../ShopCards';
import Footer from '../Footer';

export default function Shop() {
  return (
    <>
      <div className='shop-container'>
        <h1>TIENDA</h1>
      </div>
      <ShopCards />
      <Footer />
    </>
  );
}