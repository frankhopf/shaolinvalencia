import React from 'react';
import './Footer.css';
import Logo from '../images/Logotipo/SVG/Shaolin-Horizontal-blanco.svg';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h2 className='footer-subscription-heading'>
          Contacta con nosotros y s&iacute;guenos en las redes
        </h2>
        <div className='footer-container'>
          <Container className='footer-box-container'>
            <Box className='footer-box-t'>
              <div className='footer-img-container'>
                <Stack spacing={10} direction="row">
                  <Button style={{backgroundColor: '#ffffff', color:'#000000'}} variant="contained" href='/contact'>Contacto</Button>
                </Stack>
              </div>
            </Box>
          </Container>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Tel&eacute;fono de contacto</h2>
            <text>699-17-06-98</text>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <a href='https://www.instagram.com/shaolin_valencia/?hl=en' rel='noreferrer' target='_blank'>Instagram</a>
            <a href='https://www.facebook.com/TemploShaolinValencia/' rel='noreferrer' target='_blank'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCSntW88wx-kYS-0D7i1L9WQ' rel='noreferrer' target='_blank'>Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={Logo} alt='logo' height={50}/>
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;