import React, { useRef } from 'react';
import './Carousel.css';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ images }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth / 2;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={() => scroll('left')}>
        <ChevronLeft color='white' size={32} />
      </button>
      <div className="carousel-container" ref={scrollRef}>
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={() => scroll('right')}>
        <ChevronRight color='white' size={32} />
      </button>
    </div>
  );
};

export default Carousel;
