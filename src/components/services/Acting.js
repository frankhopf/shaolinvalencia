import React from 'react';
import './Services-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Exams() {
  return (
    <>
      <div className='services-spec-header'>
        <h1>SERVICIOS</h1>
      </div>
      <div className='services-spec-container'>
        <h1>Servicios de actor</h1>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container'>
              <img src='images/movie.jpg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
                <text>El Maestro Shi Xinghui ofrece trabajos como actor y coreógrafo de artes marciales para el sector del cine y del teatro. En ambos sectores cuenta con una amplia experiencia, ya que ha llevado a cabo multitud de trabajos en diferentes países. Todo esto avala sus conocimientos y profesionalidad en el sector.</text>
                <text>Entre sus últimos trabajos podemos destacar, su colaboración como actor y coreógrafo en la serie de televisión “Top Water”, su labor como actor y coreógrafo en la famosa ópera  “Aída” en el Palau de les Arts Reina Sofía de Valencia y su participación como asesor de coreografía para la prestigiosa ópera “Royal Ópera House” de Londres.</text>
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
