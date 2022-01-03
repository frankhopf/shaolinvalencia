import React from 'react';
import ReactPlayer from 'react-player';
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
        <h1>Formaci&oacute;n y obtenci&oacute;n de cinturones oficiales, preparaci&oacute;n para competiciones y mucho m&aacute;s</h1>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container'>
              <img src='images/abott.JPG' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
              <text>El Maestro Shi Xinghui, siguiendo con su labor de promover y difundir la cultura tradicional de Shaolin y las artes marciales chinas por todo el mundo, realiza seminarios nacionales e internacionales de Kung Fu, Tai Chi, Chi Kung, Meditación y Qin Na. Estos seminarios están a disposición de cualquier escuela, asociación, federación o cualquier otro tipo de organización que desee profundizar en el estudio de las artes marciales chinas. La duración de los seminarios y su contenido es adaptable a las necesidades de la entidad interesada en la organización del evento.
                    Por otro lado, para aquellos practicantes que estén interesados en profundizar en el estudio de las artes marciales por su cuenta propia, el Maestro también ofrece clases particulares.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-l'>
            <div className='classes-spec-video-container'>
              <ReactPlayer playing='true' loop={true} volume='null' muted='true' url='videos/competition.mp4' width='100%' height='100%' />
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
