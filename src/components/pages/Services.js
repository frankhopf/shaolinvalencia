import React from 'react';
import './Services.css';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Services() {
  return (
    <>
      <div className='services-header'>
        <h1>SERVICIOS</h1>
      </div>
      <div className='services-container'>
        <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/abott.JPG' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Maestro Shi Xinghui, busca con su labor de promover y difundir la cultura tradicional de Shaolin y las artes marciales chinas por todo el mundo.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/exams'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/samurai.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Centro Cultural Shaolin Valencia ofrece espectáculos de Artes Marciales a todas aquellas personas o entidades que estén interesadas en organizar este tipo de eventos. 
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/events'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/wall.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Centro Cultural Shaolin Valencia organiza periódicamente viajes a China con la finalidad de que todas las personas interesadas en visitar China y profundizar en el estudio de las artes marciales tengan la oportunidad de hacerlo de la mano del Maestro Shi Xinghui.
            </text>
            <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/trips'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/movie.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Maestro Shi Xinghui ofrece trabajos como actor y coreógrafo de artes marciales para el sector del cine y del teatro.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/acting'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='services-box-container'>
          <Box className='classes-box1'>
            <div className='classes-img-container'>
            </div>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}