import React from 'react';
import './About.css';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <>
      <div className='about-header'>
        <h1>SOBRE NOSOTROS</h1>
      </div>
      <div className='about-container'>
        <div className='about-img-container'>
          <img src='images/master.jpg' alt='horario' className='about-img' />
        </div>
        <h3>Maestro Zhu </h3>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>El maestro Zhu, de nombre religioso Shi Xinghui, es un disc&iacute;pulo de la 32ª generaci&oacute;n del templo Shaolin del monte Songshan de China.</text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Es cintur&oacute;n negro sexto dan de Wu Shu (Kung Fu) y San Da (Boxeo chino), adem&aacute;s de ser competidor nacional en China de Wu Shu y San Da.
                    Es disc&iacute;pulo reconocido de Tai Chi Chuan de la familia Chen.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Entre sus especialidades cabe destacar las t&eacute;cnicas de cabeza de hierro, palma de hierro, aguja perforante de cristal, dardo con cuerda y t&eacute;cnicas de defensa personal. </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Shi Xinghui se inici&oacute; en las artes marciales a la edad de 8 años tras ser admitido en el templo Shaolin. A lo largo de su carrera profesional ha formado parte de numerosas delegaciones art&iacute;sticas de China y de artes marciales Shaolin, con las que ha visitado pa&iacute;ses como Gran Bretaña, EE.UU., Francia, Jap&oacute;n, Canad&aacute;, Singapur, Corea del sur, Italia, España e Indonesia, entre otros.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Ha actuado en muchos espect&aacute;culos de Kung fu con circos de prestigio internacional como The Chinese State Circus de Inglaterra, Ringling Bros. Circus de EE.UU., el Circo Mundial de España, etc.{"\n"}
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Ha participado en la filmaci&oacute;n de pel&iacute;culas como actor, asesor y core&oacute;grafo de artes marciales. Ha representado papeles en pel&iacute;culas, obras de teatro y &oacute;pera Sichuan en China. En España y en Inglaterra ha participado en la representaci&oacute;n y coreograf&iacute;a de la famosa &oacute;pera de Verdi A&iacute;da.{"\n"}
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Shi Xinghui ha sido maestro de Kung Du y Tai Chi en la Universidad Chang Yan en Corea del sur, en la Universidad de Yakarta en Indonesia y en la Universidad de Valencia.{"\n"}
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>Tambi&eacute;n ha publicado numerosos art&iacute;culos sobre artes marciales en revistas especializadas de China.{"\n"}
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box-t'>
            <div className='about-img-container'>
              <text>En la actualidad Shi Xinghui se dedica a la enseñanza de las artes marciales Kung Fu, San Da, Tai Chi, Chi Kung y a la difusión del arte, cultura y lengua china.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='about-container'>
            <div className='about-img-container'>
              <img src='images/certification3.jpg' alt='horario' className='about-img1' />
            </div>
            <div className='about-img-container'>
              <img src='images/certification.JPG' alt='horario' className='about-img1' />
            </div>
            <div className='about-img-container'>
              <img src='images/certification2.JPG' alt='horario' className='about-img1' />
            </div>
      </div>
      <div className='about-container'>
            <div className='about-img-container'>
              <img src='images/official.jpg' alt='horario' className='about-img1' />
            </div>
            <div className='about-img-container'>
              <img src='images/official.jpg' alt='horario' className='about-img1' />
            </div>
      </div>
      <div className='about-container'>
        <Container className='about-box-container'>
          <Box className='about-box1'>
            <div className='about-img-container'>
            </div>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}