import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function KungFu() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>Kung Fu Shaolin</h1>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/kungfu2.JPG' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>El Kung Fu es un arte marcial muy completo y variado, indicado tanto para niños como para adultos. Se caracteriza por sus movimientos explosivos, saltos y patadas, e incluye técnicas de mano vacía y técnicas con una gran variedad de armas. Con la práctica regular del Kung Fu de Shaolin se incrementa de forma importante la fuerza, flexibilidad, velocidad y equilibrio.</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-l'>
            <div className='classes-spec-video-container'>
              <ReactPlayer playing='true' loop={true} volume='null' muted='true' url='videos/kungfu1.mp4' width='100%' height='100%' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-r'>
            <div className='classes-spec-video-container'>
            <ReactPlayer className='classes-spec-video' playing='true' loop={true} volume='null' muted='true' url='videos/kungfu2.mp4' width='100%' height='100%' />
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
