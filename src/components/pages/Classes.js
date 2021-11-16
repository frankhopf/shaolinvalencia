import React from 'react';
import '../../App.css';
import './Classes.css';
import Footer from '../Footer';

export default function Classes() {
  return (
    <>
      <div className='classes-header'>
        <h1 className='classes'>CLASES</h1>
      </div>
      <div className='classes-container'>
        <h1 className='classes'>Bienvenido a las clases del centro</h1>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container-1'>
          <img src='images/horario.jpg' alt='horario' className='classes-img-1' />
          </div>
      </div>
      <div className='classes-container'>
        <h1 className='classes'>Informaci&oacute;n sobre el nuevo centro</h1>
      </div>
      <div className='classes-container'>
        <p>El nuevo centro se encuentra localizado en la calle Fray Pedro Vives, 13 Valencia</p>
      </div>
      <div className='classes-container'>
        <div className='classes-img-container'>
          <img src='images/local.jpg' alt='horario' className='classes-img' />
        </div>
      </div>
      <div className='classes-container'>
        <h1 className='classes'>Clases</h1>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container'>
          <img src='images/forms.jpg' alt='horario' className='classes-img' />
          </div>
          <text>El Kung Fu es un arte marcial muy completo y variado, indicado tanto para niños como para adultos. Se caracteriza por sus movimientos explosivos, saltos y patadas, e incluye técnicas de mano vacía y técnicas con una gran variedad de armas. Con la práctica regular del Kung Fu de Shaolin se incrementa de forma importante la fuerza, flexibilidad, velocidad y equilibrio.</text>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container'>
          <img src='images/incense.jpg' alt='horario' className='classes-img' />
          </div>
          <text>
            El Tai Chi estilo Chen recibe su nombre de la familia Chen, originaria de Chenjiagou situada en la provincia de Henan. Según algunas teorías es el estilo más antiguo de Tai Chi.
            Se caracteriza por sus posturas bajas y porque el trabajo marcial es más visible que en otros estilos, haciendo un marcado uso del “fajin” o “exteriorización de la energía”. Combina movimientos lentos y cortos con estallidos de energía y no es raro realizar las formas a gran velocidad. Además de las formas de mano vacía también utiliza armas como la espada, el palo o la alabarda.
          </text>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container'>
          <img src='images/chi.jpg' alt='horario' className='classes-img' />
          </div>
          <text>
            El Chi kung se caracteriza por trabajar y desarrollar la energía vital o Chi. A diferencia del Taichi, el Chikung suele adoptar posiciones estáticas, sin desplazamientos. Está reconocido como tesoro cultural de China por sus efectos terapéuticos y preventivos. Reduce el estrés y la depresión. Ayuda a reducir las molestias de la lumbalgia, los dolores provocados por contracturas musculares y problemas reumáticos, alteraciones respiratorias, artrosis, artritis, osteoporosis, etc.
          </text>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container'>
          <img src='images/sanda.jpg' alt='horario' className='classes-img' />
          </div>
          <text>
            El Sanda, conocido como boxeo chino, es un estilo contemporáneo que se caracteriza por sus técnicas de puño, pierna, proyecciones y derribos. La práctica de este estilo incrementa los reflejos de la persona. El practicante conoce la situación real de un combate con contacto, aprendiendo así a visualizar los golpes del adversario y a contraatacar.
            El Qinna o defensa personal se caracteriza por el uso de técnicas de agarre para controlar las articulaciones del oponente en combinación con el ataque a ciertas cavidades de acupuntura.
          </text>
      </div>
      <div className='classes-container'>
          <div className='classes-img-container'>
          <img src='images/meditation.jpg' alt='horario' className='classes-img' />
          </div>
          <text>
            La Meditación es el camino para alcanzar el equilibrio entre el cuerpo y la mente a través de la concentración y una correcta respiración. Esta práctica constituye un antídoto perfecto contra el exceso de estímulos externos de la sociedad moderna y los efectos del envejecimiento, y promueve un estado de paz y armonía.
          </text>
      </div>
      <Footer />
    </>
  );
}
