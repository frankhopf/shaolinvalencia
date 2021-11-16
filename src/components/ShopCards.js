import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ShopCards() {
  return (
    <div className='cards'>
      <h1>Bienvenido a la tienda de la escuela Shaolin Valencia</h1>
      <h1>Secci&oacute;n bajo construcci&oacute;n</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
            <CardItem
              src='images/shoes.jpg'
              text='............................................'
            />
          </ul>  
        </div>
      </div>
    </div>
  );
}

export default ShopCards;