import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Bienvenido a la nueva escuela Shaolin Valencia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/temple.jpg'
              text='Conoce qui&eacute;nes somos y la historia de nuestro maestro'
              label='Nosotros'
              path='/about'
            />
            <CardItem
              src='images/centro.jpeg'
              text='Visita nuestro nuevo centro'
              label='Clases'
              path='/classes'
            />
          </ul>
        </div>
      </div>
      <h1>Participa en nuestras clases en gimnasio, al aire libre o incluso online</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/forms.jpg'
              text='Entrena en nuestras clases de Kung Fu'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/kids.jpg'
              text='Trae a tus hijos a las clases de Kung Fu infantil'
              label='Clases'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/incense.jpg'
              text='Disfruta de nuestras clases de de Tai Chi'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/chi.jpg'
              text='Disfruta de nuestras clases de Chi Kung'
              label='Clases'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sanda.jpg'
              text='Entrena en nuestras clases de San Da y Qin Na'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/meditation.jpg'
              text='Participa en nuestras clases de Meditaci&oacute;n'
              label='Clases'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/chinese.jpg'
              text='Aprende en nuestras clases de Idioma Chino'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/cali.jpeg'
              text='Sube de nivel tu chino con nuestras clases de Caligraf&iacute;a'
              label='Clases'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/opera.jpg'
              text='Participa en nuestras clases de Baile y Danzas tradicionales chinas'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/op.jpg'
              text='Aprende la tradici&oacute;n de la &oacute;pera china Sichuan'
              label='Clases'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ceremony.jpg'
              text='Participa en nuestras clases de ceremonia del t&eacute;'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/harp.jpg'
              text='Aprende a tocar instrumentos cl&aacute;sicos chinos'
              label='Clases'
              path='/classes'
            />
          </ul>
        </div>
      </div>
      <h1>Explora los servicios ofertados en la escuela</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/belt.jpg'
              text='Formaci&oacute;n y obtenci&oacute;n de cinturones oficiales'
              label='Servicios'
              path='/services'
            />
            <CardItem
              src='images/kick.jpg'
              text='Exhibiciones'
              label='Servicios'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wall.jpg'
              text='Participa en los viajes a China y al Templo con nosotros'
              label='Servicios'
              path='/services'
            />
            <CardItem
              src='images/jump.jpg'
              text='Oferta de actor y core&oacute;grafo'
              label='Servicios'
              path='/services'
            />
          </ul>
        </div>
      </div>
      <h1>Compra tu equipaci&oacute;n en la escuela</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/shoes.jpg'
              text='Toda la equipaci&oacute;n y material que necesitas en un solo sitio'
              label='Tienda'
              path='/shop'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;