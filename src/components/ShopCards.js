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
              src='images/pants.jpeg'
              text='Pantalones para entrenamiento'
            />
          </ul>
          <ul className='cards__items'>
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
              src='images/clothes.jpeg'
              text='Traje de Tai Chi blanco'
            />
            <CardItem
              src='images/clothes2.jpeg'
              text='Traje de Tai Chi negro'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/shoes.jpeg'
              text='Zapatos para entrenamiento tipo 1'
            />
            <CardItem
              src='images/shoes2.jpeg'
              text='Zapatos para entrenamiento tipo 2'
            />
            <CardItem
              src='images/shoes3.jpeg'
              text='Zapatos para entrenamiento tipo 3'
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
              text='Nunchakus para Kung Fu tipo 1'
            />
            <CardItem
              src='images/nunchaku2.jpeg'
              text='Nunchakus para Kung Fu tipo 2'
            />
            <CardItem
              src='images/nunchaku3.jpeg'
              text='Nunchakus para Kung Fu tipo 3'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/stick.jpeg'
              text='Palo para Kung Fu'
            />
            <CardItem
              src='images/chain.jpeg'
              text='Cadena de nueve secciones para Kung Fu'
            />
            <CardItem
              src='images/chain2.jpeg'
              text='Dardo con cuerda para Kung Fu'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/fan.jpeg'
              text='Abanico para Kung Fu y Tai Chi tipo 1'
            />
            <CardItem
              src='images/fan2.jpeg'
              text='Abanico para Kung Fu y Tai Chi tipo 2'
            />
            <CardItem
              src='images/fan3.jpeg'
              text='Abanico para Kung Fu y Tai Chi tipo 3'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/sword.jpeg'
              text='Sable para Kung Fu y Tai Chi'
            />
            <CardItem
              src='images/pao.jpeg'
              text='Almohadilla de golpeo para San Da'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;