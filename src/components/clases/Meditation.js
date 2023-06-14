import React from 'react';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Meditation() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>Meditaci&oacute;n</h1>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/meditation.jpg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>La Meditaci&oacute;n es el camino para alcanzar el equilibrio entre el cuerpo y la mente a trav&eacute;s de la concentraci&oacute;n y una correcta respiraci&oacute;n. Esta pr&aacute;ctica constituye un ant&iacute;doto perfecto contra el exceso de est&iacute;mulos externos de la sociedad moderna y los efectos del envejecimiento, y promueve un estado de paz y armon&iacute;a.</text>
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
