import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ShopCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tshirt.jpeg'
              text='Camiseta de manga corta para entrenamiento'
            />
            <CardItem
              src='images/shirt.jpeg'
              text='Ropa tradicional rojo y blanco'
            />
            <CardItem
              src='images/shirt2.jpeg'
              text='Ropa tradicional negro'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pants.jpeg'
              text='Pantalones para entrenamiento'
            />
            <CardItem
              src='images/shoes.jpeg'
              text='Zapatos para entrenamiento'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/bracelet.jpeg'
              text='Pulsera tipo 1'
            />
            <CardItem
              src='images/bracelet2.jpeg'
              text='Pulsera tipo 2'
            />
            <CardItem
              src='images/bracelet3.jpeg'
              text='Pulsera tipo 3'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/nunchaku.jpeg'
              text='Nunchakus para Kung Fu'
            />
            <CardItem
              src='images/stick.jpeg'
              text='Palo para Kung Fu'
            />
            <CardItem
              src='images/chain2.jpeg'
              text='Cadena de nueve secciones para Kung Fu'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/fan.jpeg'
              text='Abanico para Kung Fu'
            />
            <CardItem
              src='images/sword.jpeg'
              text='Espada para Kung Fu'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;