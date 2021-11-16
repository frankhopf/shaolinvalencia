import React from 'react';
import '../../App.css';
import './Shop.css';
import ShopCards from '../ShopCards';
import Footer from '../Footer';

export default function Shop() {
  return (
    <>
      <div className='shop-container'>
        <h1 className='shop'>TIENDA</h1>
      </div>
      <ShopCards />
      <Footer />
    </>
  );
}