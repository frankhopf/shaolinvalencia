import React from 'react';
import './Noticias.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function Noticias() {
  const newsData = [
    {
      id: 1,
      image: 'images/nunchaku3.jpeg',
      date: 'Junio 02, 2023',
      title: 'Curso instensivo chinchilla',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus justo at tellus dignissim, id finibus elit scelerisque.',
    },
    {
      id: 2,
      image: 'images/news_actor.jpeg',
      date: 'Junio 02, 2023',
      title: 'Visita de Maestro Chiu Chi Ling',
      content: 'CHIU CHI LING visita el centro SHAOLIN VALENCIA \n Hemos tenido el gran honor y placer de contar con la visita del Actor y Maestro de Artes Marciales Chiu Chi Ling que, en su periplo europeo, ha pasado unos días en la ciudad de Valencia, y en su apretada agenda, nos ha obsequiado con una amena tarde en Shaolin Valencia.\n Chiu Chi Ling es un reconocido actor que ha compartido pantalla con actores de la talla de Jackie Chan o Jet Li, y que los amantes de las películas de artes marciales recordamos en actuaciones inolvidables como La Serpiente a la Sombra del Aguila (1978) o más reciente en Kung Fu Sion (2004) o en tutoriales como Tiger and Crane Shaolin Kung Fu (1982), que se han convertido en grandes clásicos del cine de Artes Marciales.\n El Maestro Chiu Chi Ling es el máximo representante actual del estilo Hung Gar, que aprendió en el seno de su familia bajo la tutela directa de su padre, el Gran Maestro Chiu Kao.\n Amigo personal del maestro Zhu QiHui, director de Shaolin Valencia, con el que también ha compartido pantalla y coreografía en varias películas en China, ha hecho gala de su enorme vitalidad y condición física durante la vista a Shaolin Valencia, una clara muestra de la excelencia que supone una vida dedicada a la práctica de las Artes Marciales Chinas.\n Gracias Maestro Chiu Chi Ling!.',
    },
    {
      id: 3,
      image: 'images/Anyo_nuevo_chino.jpeg',
      date: 'Enero 12, 2023',
      title: 'Cabalgata año nuevo chino 2023',
      content: 'Actividades con Shaolin Valencia.',
    }
    // Add more news objects as needed
  ];

  // Create a state variable to keep track of the currently expanded news post.
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  // Create a function that handles the click event when a card is clicked and expands the corresponding news post.
  const handleCardClick = (newsId) => {
  setExpandedNewsId((prevExpandedId) => (prevExpandedId === newsId ? null : newsId));
};

  
  return (
    <>
      <div className='news-spec-header'>
        <h1>NOTICIAS</h1>
      </div>
      <div className="news-section">
        {newsData.map((news) => (
          <div key={news.id} className={`news-card ${expandedNewsId === news.id ? 'expanded' : ''}`} onClick={() => handleCardClick(news.id)}>
            <img src={news.image}className='news-spec-img' alt="News" />
            <div className="card-details">
              <span className="date">{news.date}</span>
              <h3 className="title">{news.title}</h3>
              {expandedNewsId === news.id && (
                <>
                  <p className="content">{news.content}</p>
                  <ul className="list">
                    {news.listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
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
