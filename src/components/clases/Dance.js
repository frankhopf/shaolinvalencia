import React from 'react';
import ReactPlayer from 'react-player';
import './Classes-specific.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Dance() {
  return (
    <>
      <div className='classes-spec-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-spec-container'>
        <h1>Danzas tradicionales chinas y danzas del le&oacute;n y del drag&oacute;n</h1>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/dance.png' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container-1'>
          <Box className='classes-spec-box-v-l'>
            <div className='classes-spec-video-container'>
              <ReactPlayer playing='true' loop={false} volume='null' muted='true' url='videos/dance.mp4' width='100%' height='100%' controls={true} />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/dragon4.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/dragon2.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container-l'>
              <img src='images/dragon3.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container-r'>
              <img src='images/dragon6.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container-l'>
              <img src='images/dragon1.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container-r'>
              <img src='images/dragon5.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/dragon7.jpeg' alt='horario' className='classes-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-spec-container'>
        <Container className='classes-spec-box-container'>
          <Box className='classes-spec-box'>
            <div className='classes-spec-img-container'>
              <img src='images/dragon8.jpeg' alt='horario' className='classes-spec-img' />
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
