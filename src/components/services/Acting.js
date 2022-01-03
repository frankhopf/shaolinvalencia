import React from 'react';
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
        <h1>Servicios de actor</h1>
      </div>
      <div className='services-spec-container'>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box'>
            <div className='services-spec-img-container'>
              <img src='images/movie.jpg' alt='horario' className='services-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='services-spec-box-container'>
          <Box className='services-spec-box-t'>
            <div className='services-spec-text-container'>
                <text>El Centro Cultural Shaolin Valencia ofrece espectáculos de Artes Marciales a todas aquellas personas o entidades que estén interesadas en organizar este tipo de eventos. Las actuaciones están dirigidas y organizadas por el maestro Shi Xinghui, quien también forma parte en ellas. El maestro cuenta con una gran experiencia, ya que ha realizado espectáculos en multitud de países. Las representaciones se pueden adaptar en función del tiempo disponible para la actuación, el espacio, etc.
                    Los espectáculos ofrecen al público la posibilidad de disfrutar de algunas de las múltiples y espectaculares formas con armas propias del Kung Fu Shaolin. También hay demostraciones de formas de mano vacía. Algunas de estas formas imitan movimientos típicos de algunos de los animales más distinguidos. Tanto en las formas con armas como en las de mano vacía se puede apreciar la habilidad y destreza del grupo de exhibición. Por otra parte, el espectáculo también muestra el arte milenario del Tai Chi, cuyos movimientos son suaves, precisos y están llenos de belleza. Por último, el maestro Shi Xinghui hace una demostración del arte del Chi Kung “ duro “, donde se pone de manifiesto el poder de la energía vital o Chi; es todo un espectáculo digno de ver y de admirar.
                </text>
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
