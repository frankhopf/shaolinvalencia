import React from 'react';
import './Shop.css';
import ShopCards from '../ShopCards';
import Footer from '../Footer';

export default function Shop() {
  return (
    <>
      <div className='shop-header'>
        <h1>TIENDA</h1>
      </div>
      <div className='shop-container'>
        <h1>Bienvenido a la tienda de la escuela Shaolin Valencia</h1>
      </div>
      <div className='shop-container'>
        <p>Para la realizaci&oacute;n de cualquier consulta o compra, por favor contactar con el centro.</p>
      </div>
      <div className='shop-container'>
        <p>Los pagos se podr&aacute;n realizar a trav&eacute; de Bizum o en efectivo. Todas las recogidas se realizan en el centro.</p>
      </div>
      <ShopCards />
      <Footer />
    </>
  );
}