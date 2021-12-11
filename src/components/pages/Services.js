import React from 'react';
import './Services.css';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Services() {
  return (
    <>
      <div className='services-header'>
        <h1>SERVICIOS</h1>
      </div>
      <div className='services-container'>
        <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/abott.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Maestro Shi Xinghui, siguiendo con su labor de promover y difundir la cultura tradicional de Shaolin y las artes marciales chinas por todo el mundo, realiza seminarios nacionales e internacionales de Kung Fu, Tai Chi, Chi Kung, Meditación y Qin Na. Estos seminarios están a disposición de cualquier escuela, asociación, federación o cualquier otro tipo de organización que desee profundizar en el estudio de las artes marciales chinas. La duración de los seminarios y su contenido es adaptable a las necesidades de la entidad interesada en la organización del evento.
                    Por otro lado, para aquellos practicantes que estén interesados en profundizar en el estudio de las artes marciales por su cuenta propia, el Maestro también ofrece clases particulares.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/event.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Centro Cultural Shaolin Valencia ofrece espectáculos de Artes Marciales a todas aquellas personas o entidades que estén interesadas en organizar este tipo de eventos. Las actuaciones están dirigidas y organizadas por el maestro Shi Xinghui, quien también forma parte en ellas. El maestro cuenta con una gran experiencia, ya que ha realizado espectáculos en multitud de países. Las representaciones se pueden adaptar en función del tiempo disponible para la actuación, el espacio, etc.
                    Los espectáculos ofrecen al público la posibilidad de disfrutar de algunas de las múltiples y espectaculares formas con armas propias del Kung Fu Shaolin. También hay demostraciones de formas de mano vacía. Algunas de estas formas imitan movimientos típicos de algunos de los animales más distinguidos. Tanto en las formas con armas como en las de mano vacía se puede apreciar la habilidad y destreza del grupo de exhibición. Por otra parte, el espectáculo también muestra el arte milenario del Tai Chi, cuyos movimientos son suaves, precisos y están llenos de belleza. Por último, el maestro Shi Xinghui hace una demostración del arte del Chi Kung “ duro “, donde se pone de manifiesto el poder de la energía vital o Chi; es todo un espectáculo digno de ver y de admirar.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/wall.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Centro Cultural Shaolin Valencia organiza periódicamente viajes a China con la finalidad de que todas las personas interesadas en visitar China y profundizar en el estudio de las artes marciales tengan la oportunidad de hacerlo de la mano del Maestro Shi Xinghui.
                    Durante los viajes se dedican unos días a realizar turismo y conocer los lugares más relevantes y mágicos de China. Otros días estarán dedicados a la práctica y perfeccionamiento de las artes marciales.
                    Estos viajes están a disposición tanto de los alumnos de Shaolin Valencia como para grupos de practicantes que deseen organizar este tipo de viajes bajo la tutela del Maestro.
            </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='services-container'>
      <Container className='services-box-container'>
          <Box className='services-box'>
            <div className='services-img-container'>
              <img src='images/movie.jpg' alt='horario' className='classes-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-box-container'>
          <Box className='services-box-t'>
            <div className='services-img-container'>
              <text>El Maestro Shi Xinghui ofrece trabajos como actor y coreógrafo de artes marciales para el sector del cine y del teatro. En ambos sectores cuenta con una amplia experiencia, ya que ha llevado a cabo multitud de trabajos en diferentes países. Todo esto avala sus conocimientos y profesionalidad en el sector.
                    Entre sus últimos trabajos podemos destacar, su colaboración como actor y coreógrafo en la serie de televisión “Top Water”, su labor como actor y coreógrafo en la famosa ópera  “Aída” en el Palau de les Arts Reina Sofía de Valencia y su participación como asesor de coreografía para la prestigiosa ópera “Royal Ópera House” de Londres.
              </text>
            </div>
          </Box>
        </Container>
      </div>
      <div className='classes-container'>
        <Container className='services-box-container'>
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