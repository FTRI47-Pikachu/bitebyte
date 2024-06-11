import React, { useState } from 'react';

const slides = [
  { id: 1, content: 'Snack 1', image: 'https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg' },
  { id: 2, content: 'Snack 2', image: 'https://www.eatingwell.com/thmb/whY7k1ZN9FfEReccb6PLbq3BhuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45471921-15d807cae05e49eb9f4232654fb34c13.jpg' },
  { id: 3, content: 'Snack 3', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/05/health-snacks.jpg' },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ width: '600px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              minWidth: '100%',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${activeIndex * 100}%)`,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2em',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
