import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ChiKung() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>Chi Kung</h1>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/chikung2.jpg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box-t'>
            <div className='classes-spec-text-container'>
              <text>El Chi kung se caracteriza por trabajar y desarrollar la energ&iacute;a vital o Chi. A diferencia del Taichi, el Chikung suele adoptar posiciones est&aacute;ticas, sin desplazamientos. Est&aacute; reconocido como tesoro cultural de China por sus efectos terap&eacute;uticos y preventivos. Reduce el estr&eacute;s y la depresi&oacute;n. Ayuda a reducir las molestias de la lumbalgia, los dolores provocados por contracturas musculares y problemas reum&aacute;ticos, alteraciones respiratorias, artrosis, artritis, osteoporosis, etc.</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-r'>
            <div className='classes-spec-video-container'>
            <ReactPlayer className='classes-spec-video' playing='true' loop={true} volume='null' muted='true' url='videos/chikung.mp4' width='100%' height='100%' controls={true} />
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
