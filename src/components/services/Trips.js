import React from 'react';
import './Services-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Trips() {
  return (
    <>
      <div className='services-spec-header'>
        <h1>SERVICIOS</h1>
      </div>
      <div className='services-spec-container'>
        <h1>Viajes a China y al templo shaolin</h1>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container'>
              <img src='images/young2.JPG' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
                <text>El Centro Cultural Shaolin Valencia organiza periódicamente viajes a China con la finalidad de que todas las personas interesadas en visitar China y profundizar en el estudio de las artes marciales tengan la oportunidad de hacerlo de la mano del Maestro Shi Xinghui.
                        Durante los viajes se dedican unos días a realizar turismo y conocer los lugares más relevantes y mágicos de China. Otros días estarán dedicados a la práctica y perfeccionamiento de las artes marciales.
                        Estos viajes están a disposición tanto de los alumnos de Shaolin Valencia como para grupos de practicantes que deseen organizar este tipo de viajes bajo la tutela del Maestro.
                </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box1'>
            <div className='services-spec-img-container'>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
