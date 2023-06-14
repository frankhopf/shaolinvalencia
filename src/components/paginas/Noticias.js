import React from 'react';
import './Noticias.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Noticias() {
  return (
    <>
      <div className='news-spec-header'>
        <h1>NOTICIAS</h1>
      </div>
      <div className='news-spec-container'>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box'>
            <div className='news-spec-img-container-l'>
              <img src='images/Anyo_nuevo_chino.jpeg' alt='horario' className='news-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box-t'>
            <div className='news-spec-text-container'>
              <h1>Actividades con Shaolin Valencia</h1>
              <h3>Día 14 de Enero — Sábado</h3>
                <ul>
                  <li>Espectáculos en Quart de Poblet, Valencia</li>
                </ul>
              <h3>Día 16 de Enero — Lunes</h3>
                <ul>
                  <li>Espectáculos en Murcia</li>
                </ul>
              <h3>Día 19 de Enero — Jueves</h3>
                <ul>
                  <li>Cabalgata del Año Nuevo Chino en Manises</li>
                </ul>
              <h3>Día 21 de Enero — Sábado</h3>
                <ul>
                  <li>11:00–11:30 — Clase de TaiChi y ChiKung gratuitas</li>
                  <li>12:00–14:00 — Exibiciones de Kung Fu Shaolin, TaiChi, Kung Fu Té, danzas y canciones chinas</li>
                  <li>18:00 — Gran Cabalgata del Año Nuevo Chino</li>
                </ul>
              <h3>Día 22 de Enero — Domingo</h3>
                <ul>
                  <li>11:00–14:00 — Exibiciones en la Calle Pelayo</li>
                </ul>
              <h3>Día 23 de Enero — Lunes</h3>
                <ul>
                  <li>Gran espectáculo en el teatro Liceu, Barcelona</li>
                </ul>
              <h3>Día 26 de Enero — Jueves</h3>
                <ul>
                  <li>Conferencia del Kung Fu Shaolin con el Maestro Zhu en la Facultat de Filología, Traducció i Comunicació, Salón de Grados</li>
                </ul>
            </div>
          </Box>
        </Container>
      </div>
      <div className='news-spec-container'>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box1'>
            <div className='news-spec-img-container'>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
