import React from 'react';
import '../../App.css';
import './About.css';
import Footer from '../Footer';

export default function About() {
  return (
    <>
      <div className='about-header'>
        <h1 className='about'>SOBRE NOSOTROS</h1>
      </div>
      <div className='about-container'>
        <div className='about-img-container'>
          <img src='images/dummy.jpg' alt='horario' className='about-img' />
        </div>
        <h3 className='about'>Maestro Zhu </h3>
      </div>
      <div className='about-container'>
        <p>
          El maestro Zhu, de nombre religioso Shi Xinghui, es un disc&iacute;pulo de la 32ª generaci&oacute;n del templo Shaolin del monte Songshan de China.
          </p>
      </div>
      <div className='about-container'>
        <p>
          Es cintur&oacute;n negro sexto dan de Wu Shu (Kung Fu) y San Da (Boxeo chino), adem&aacute;s de ser competidor nacional en China de Wu Shu y San Da.
          Es disc&iacute;pulo reconocido de Tai Chi Chuan de la familia Chen.
        </p>
      </div>
      <div className='about-container'>
        <p>
          Entre sus especialidades cabe destacar las t&eacute;cnicas de cabeza de hierro, palma de hierro, aguja perforante de cristal, dardo con cuerda y t&eacute;cnicas de defensa personal.
        </p>
      </div>
      <div className='about-container'>
        <p>
          Shi Xinghui se inici&oacute; en las artes marciales a la edad de 8 años tras ser admitido en el templo Shaolin. A lo largo de su carrera profesional ha formado parte de numerosas delegaciones art&iacute;sticas de China y de artes marciales Shaolin, con las que ha visitado pa&iacute;ses como Gran Bretaña, EE.UU., Francia, Jap&oacute;n, Canad&aacute;, Singapur, Corea del sur, Italia, España e Indonesia, entre otros.
        </p>
      </div>
      <div className='about-container'>
        <p>
          Ha actuado en muchos espect&aacute;culos de Kung fu con circos de prestigio internacional como The Chinese State Circus de Inglaterra, Ringling Bros. Circus de EE.UU., el Circo Mundial de España, etc.{"\n"}
          </p>
      </div>
      <div className='about-container'>
        <p>
          Ha participado en la filmaci&oacute;n de pel&iacute;culas como actor, asesor y core&oacute;grafo de artes marciales. Ha representado papeles en pel&iacute;culas, obras de teatro y &oacute;pera Sichuan en China. En España y en Inglaterra ha participado en la representaci&oacute;n y coreograf&iacute;a de la famosa &oacute;pera de Verdi A&iacute;da.{"\n"}
          </p>
      </div>
      <div className='about-container'>
        <p>
          Shi Xinghui ha sido maestro de Kung Du y Tai Chi en la Universidad Chang Yan en Corea del sur, en la Universidad de Yakarta en Indonesia y en la Universidad de Valencia.{"\n"}
          </p>
      </div>
      <div className='about-container'>
        <p>
          Tambi&eacute;n ha publicado numerosos art&iacute;culos sobre artes marciales en revistas especializadas de China.{"\n"}
          </p>
      </div>
      <div className='about-container'>
        <p>
          En la actualidad Shi Xinghui se dedica a la enseñanza de las artes marciales Kung Fu, San Da, Tai Chi, Chi Kung y a la difusión del arte, cultura y lengua china.
        </p>
      </div>
      <Footer />
    </>
  );
}