import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SanDa() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>San Da y Qin Na</h1>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/sanda.jpg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>El Sanda, conocido como boxeo chino, es un estilo contemporáneo que se caracteriza por sus técnicas de puño, pierna, proyecciones y derribos. La práctica de este estilo incrementa los reflejos de la persona. El practicante conoce la situación real de un combate con contacto, aprendiendo así a visualizar los golpes del adversario y a contraatacar.</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/sanda2.jpg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>El Qinna o defensa personal se caracteriza por el uso de técnicas de agarre para controlar las articulaciones del oponente en combinación con el ataque a ciertas cavidades de acupuntura</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-l'>
            <div className='classes-spec-video-container'>
              <ReactPlayer playing='true' controls={true} loop={false} volume='null' muted='true' url='videos/sanda.mp4' width='100%' height='100%' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-r'>
            <div className='classes-spec-video-container'>
            <ReactPlayer className='classes-spec-video' playing='true' controls={true} loop={false} volume='null' muted='true' url='videos/qinna.mp4' width='100%' height='100%' />
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
