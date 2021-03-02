import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CAROUSEL_CARDS } from './constants';
import './Gallery.scss';

const Gallery = () => {

  const renderGallery = () => {
    return (
      <Carousel>
        {CAROUSEL_CARDS.map(card => {
          return (
            <Carousel.Item key={card.id}>
              <img
                className="d-block w-100"
                src={card.imageUrl}
                alt={card.imageDescription}
              />
              <Carousel.Caption>
                <h3>{card.imageLabel}</h3>
                <p>{card.imageDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    );
  }

  return (
    <>
      { renderGallery() }
    </>
  );
}

export default Gallery;
