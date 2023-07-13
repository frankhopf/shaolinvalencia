import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Box from '@mui/material/Box';


function Cards() {
  return (
    <div className='cards'>
      <div><section id='card-scroll-point'></section></div>
      <h1>Bienvenido a la nueva escuela Shaolin Valencia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/master-temple.jpg'
              text='Conoce qui&eacute;nes somos y la historia de nuestro maestro'
              label='Nosotros'
              path='/about'
            />  
            <CardItem
              src='images/center.jpg'
              text='Visita nuestro nuevo centro en pleno centro de Valencia'
              label='Clases'
              path='/classes'
            />
            <CardItem
              src='images/abott.JPG'
              text='Conoce los servicios ofertados por el maestro'
              label='Servicios'
              path='/services'
            />
          </ul>
        </div>
      </div>
      <a href='/noticias'><button type="button" class="block" onclick='location.href=/noticias'>NOTICIAS</button></a>
      <div className='cards__container'>
        <Box className='cards__wrapper'></Box>
      </div>
      <h1>Participa en nuestras clases en gimnasio, al aire libre o incluso online</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/kungfu.jpg'
              text='Entrena en nuestras clases de Kung Fu'
              label='Clases'
              path='/kungfu'
            />
            <CardItem
              src='images/kids.jpg'
              text='Trae a tus hijos a las clases de Kung Fu infantil'
              label='Clases'
              path='/kungfukids'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/taichi2.jpg'
              text='Disfruta de nuestras clases de Tai Chi'
              label='Clases'
              path='/taichi'
            />
            <CardItem
              src='images/chikung.jpg'
              text='Disfruta de nuestras clases de Chi Kung'
              label='Clases'
              path='/chikung'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sanda.jpg'
              text='Entrena en nuestras clases de San Da y Qin Na'
              label='Clases'
              path='/sanda'
            />
            <CardItem
              src='images/meditation.jpg'
              text='Participa en nuestras clases de Meditaci&oacute;n'
              label='Clases'
              path='/meditation'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/chinese-text.jpg'
              text='Aprende en nuestras clases de Idioma Chino'
              label='Clases'
              path='/chinese'
            />
            <CardItem
              src='images/caligraphy.jpg'
              text='Sube de nivel tu chino con nuestras clases de Caligraf&iacute;a'
              label='Clases'
              path='/calligraphy'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dance.png'
              text='Participa en nuestras clases de danzas tradicionales chinas'
              label='Clases'
              path='/dance'
            />
            <CardItem
              src='images/opera.jpg'
              text='Aprende la tradici&oacute;n de la &oacute;pera china Sichuan'
              label='Clases'
              path='/opera'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tea-class.jpg'
              text='Participa en nuestras clases de ceremonia del t&eacute;'
              label='Clases'
              path='/tea'
            />
            <CardItem
              src='images/harp.jpg'
              text='Aprende a tocar instrumentos cl&aacute;sicos chinos'
              label='Clases'
              path='/instrument'
            />
          </ul>
        </div>
      </div>
      <h1>Explora los servicios ofertados en la escuela</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/professor.jpg'
              text='Formaci&oacute;n y obtenci&oacute;n de cinturones oficiales, preparaci&oacute;n para competiciones y mucho m&aacute;s'
              label='Servicios'
              path='/exams'
            />
            <CardItem
              src='images/show.jpg'
              text='Exhibiciones'
              label='Servicios'
              path='/events'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wall.jpg'
              text='Participa en los viajes a China y al Templo con la escuela'
              label='Servicios'
              path='/trips'
            />
            <CardItem
              src='images/act.jpg'
              text='Oferta de actor y core&oacute;grafo'
              label='Servicios'
              path='/acting'
            />
          </ul>
        </div>
      </div>
      <h1>Compra tu equipaci&oacute;n en la escuela</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/equip.jpg'
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