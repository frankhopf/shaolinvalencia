import React from 'react';
import './Classes.css';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Classes() {
  return (
    <>
      <div className='classes-header'>
        <h1>CLASES</h1>
      </div>
      <div className='classes-container'>
        <h1>Bienvenido a las clases del centro</h1>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container-h'>
          <img src='images/horario.jpg' alt='horario' className='classes-img-1' />
        </div>
      </div>
      <div className='classes-container'>
        <h1>Informaci&oacute;n sobre el nuevo centro</h1>
      </div>
      <div className='classes-container'>
        <p>El nuevo centro se encuentra localizado en la calle Fray Pedro Vives, 13 Valencia</p>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container-1'>
          <img src='images/local.jpg' alt='horario' className='classes-img' />
        </div>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container-2'>
          <img src='images/centro7.jpeg' alt='horario' className='classes-img' />
        </div>
        <div className='classes-img-container-2'>
          <img src='images/centro8.jpeg' alt='horario' className='classes-img' />
        </div>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container-2'>
          <img src='images/center.jpg' alt='horario' className='classes-img' />
        </div>
        <div className='classes-img-container-2'>
          <img src='images/centro2.jpeg' alt='horario' className='classes-img' />
        </div>
        <div className='classes-img-container-2'>
          <img src='images/centro3.jpeg' alt='horario' className='classes-img' />
        </div>
        <div className='classes-img-container-2'>
          <img src='images/centro4.jpeg' alt='horario' className='classes-img' />
        </div>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container-2'>
          <img src='images/centro5.jpeg' alt='horario' className='classes-img' />
        </div>
        <div className='classes-img-container-2'>
          <img src='images/centro6.jpeg' alt='horario' className='classes-img' />
        </div>
      </div>
      <div className='classes-container'>
        <h1>Clases</h1>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
              <img src='images/kungfu2.JPG' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>El Kung Fu es un arte marcial muy completo y variado, indicado tanto para niños como para adultos.</text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/kungfu'>Adultos</Button>
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/kungfukids'>Niños</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
              <img src='images/taichi2.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>
                El Tai Chi estilo Chen se caracteriza por sus posturas bajas y porque el trabajo marcial es más visible que en otros estilos, haciendo un marcado uso del “fajin” o “exteriorización de la energía”.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/taichi'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
              <img src='images/chikung2.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>
                El Chi kung se caracteriza por trabajar y desarrollar la energía vital o Chi.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/chikung'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
            <img src='images/sanda2.png' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>
                El San Da, conocido como boxeo chino, es un estilo contemporáneo que se caracteriza por sus técnicas de puño, pierna, proyecciones y derribos.
                El Qin Na o defensa personal se utiliza junto con el San Da para un estilo de combate efectivo.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/sanda'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
          <Box className='classes-box'>
            <div className='classes-img-container'>
              <img src='images/meditation2.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='classes-box-container'>
          <Box className='classes-box-t'>
            <div className='classes-img-container'>
              <text>
                La Meditación es el camino para alcanzar el equilibrio entre el cuerpo y la mente a través de la concentración y una correcta respiración.
              </text>
              <Stack spacing={10} direction="row">
                <Button style={{backgroundColor: '#ff7f32'}} variant="contained" href='/meditation'>Saber m&aacute;s</Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='classes-box-container'>
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
