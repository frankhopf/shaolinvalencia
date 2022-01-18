import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function KungFuKids() {
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
              <img src='images/kids.jpg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>El Kung Fu es un arte marcial que nació en China hace mucho tiempo. Es bueno practicarlo desde niño, a partir de los 4 años.
                Tiene muchas ventajas:</text>
              <text>
                <ul>
                  <li>Es un buen deporte y saludable.</li>
                  <li>Mejora la capacidad de reacci&oacute;n, la coordinaci&oacute;n, la flexibilidad y el equilibrio.</li>
                  <li>Potencia la autoestima, la disciplina y el compañerismo.</li>
                  <li>Enseña al niño a confiar en s&iacute; mismo y a perder el miedo.</li>
                  <li>Ayuda a eliminar conductas caprichosas y a interesarse por mejorar.</li>
                  <li>Aumenta la capacidad de esfuerzo, constancia y defensa personal.</li>
                  <li>Permite evolucionar mediante cinturones y competiciones.</li>
                </ul>
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-l'>
            <div className='classes-spec-video-container'>
              <ReactPlayer playing='true' controls={true} loop={false} volume='null' muted='true' url='videos/kids1.mp4' width='100%' height='100%' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-r'>
            <div className='classes-spec-video-container'>
            <ReactPlayer className='classes-spec-video' playing='true' controls={true} loop={false} volume='null' muted='true' url='videos/kids2.mp4' width='100%' height='100%' />
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
