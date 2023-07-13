import React from 'react';
import './Services-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Acting() {
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
              <text>El Qihui Zhu ofrece trabajos como actor y coreógrafo de artes marciales para el sector del cine y del teatro. En ambos sectores cuenta con una amplia experiencia, ya que ha llevado a cabo multitud de trabajos en diferentes países. Todo ello avala sus conocimientos y profesionalidad en el sector.</text>
            </div>
          </Box>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>Ha participado como actor, en la coreografía de la Ópera “Aida” de Giuseppe Verdi, en el Palau de les Arts Reina Sofía de Valencia y en el Royal Opera House de Londres.</text>
            </div>
          </Box>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>Director del espectáculo “Flamenco y Artes Marciales” representado en el Palau de la Música de Valencia.</text>
            </div>
          </Box>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>Ha actuado en numerosas películas y series de televisión. </text>
            </div>
          </Box>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>En España: </text>
              <text>
                <ul>
                  <li>En 2015, en la película “Anacleto: Agente secreto” de Javier Ruiz Caldera, protagonizada por Imanol Arias y Alexandra Jimenez.</li>
                  <li>En la serie  de drama y suspense, “Sin identidad” de Antena 3, producida por Diagonal TV que fue emitida entre mayo de 2014 y julio de 2015.</li>
                  <li>En 2008, en la serie de televisión de Canal Nou, “Singles” dirigida por Alberto Argüelles.</li>
                  <li>En la serie “Top Water”, emitida en el canal de caza y pesca de canal plus.</li>
                </ul>
              </text>
            </div>
          </Box>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>En China:</text>
              <text>
                <ul>
                  <li>Ha intervenido en múltiples películas junto a actores famosos.</li>
                </ul>
              </text>      
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container-l'>
              <img src='images/movie2.jpeg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container-r'>
              <img src='images/movie3.jpeg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container-l'>
              <img src='images/movie4.jpeg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container-r'>
              <img src='images/movie5.jpeg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container'>
              <img src='images/movie6.jpeg' alt='horario' className='services-spec-img' />
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
