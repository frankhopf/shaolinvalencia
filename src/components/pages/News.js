import React from 'react';
import './News.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function News() {
  return (
    <>
      <div className='news-spec-header'>
        <h1>NOTICIAS</h1>
      </div>
      <div className='news-spec-container'>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box'>
            <div className='news-spec-img-container'>
              <img src='images/news1.jpeg' alt='horario' className='news-spec-img' />
            </div>
          </Box>
        </Container>
      </div>
      <div className='news-spec-container'>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box'>
            <div className='news-spec-img-container-l'>
              <img src='images/news2.jpeg' alt='horario' className='news-spec-img' />
            </div>
          </Box>
        </Container>
        <Container className='news-spec-box-container'>
          <Box className='news-spec-box'>
            <div className='news-spec-img-container-r'>
              <img src='images/news3.jpeg' alt='horario' className='news-spec-img' />
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
