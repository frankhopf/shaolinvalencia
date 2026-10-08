import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function TaiChi() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>Tai Chi Chen</h1>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
              <img src='images/taichi2.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>El Tai Chi estilo Chen recibe su nombre de la familia Chen, originaria de Chenjiagou situada en la provincia de Henan. Seg&uacute;n algunas teor&iacute;as es el estilo m&aacute;s antiguo de Tai Chi.
                Se caracteriza por sus posturas bajas y porque el trabajo marcial es m&aacute;s visible que en otros estilos, haciendo un marcado uso del “fajin” o “exteriorización de la energ&iacute;a”. Combina movimientos lentos y cortos con estallidos de energ&iacute;a y no es raro realizar las formas a gran velocidad. Adem&aacute;s de las formas de mano vac&iacute;a tambi&eacute;n utiliza armas como la espada, el palo o la alabarda.</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/taichi1-102026.jpeg' alt='horario' className='classes-spec-img' />
            </div>
            <div className='classes-spec-img-container'>
              <img src='images/taichi2-102026.jpeg' alt='horario' className='classes-spec-img' />
            </div>
            <div className='classes-spec-img-container'>
              <img src='images/taichi3-102026.jpeg' alt='horario' className='classes-spec-img' />
            </div>
            <div className='classes-spec-img-container'>
              <img src='images/taichi4-102026.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box1'>
            <div className='classes-spec-img-container'>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
