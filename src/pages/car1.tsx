import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';



interface Slide {
  id: number;
  content: string;
  image: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="flex overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-128 border rounded-lg ">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white text-2xl"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-shadow-lg">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;

