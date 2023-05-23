import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Button } from '@mui/material';
import template1 from './templates-cv/template_sin_exp.png';
import template2 from './templates-cv/template_con_exp.png';
import template3 from './templates-cv/template_junior.png';
import template4 from './templates-cv/template_junior.png';

function App() {
  const data = [
    {
      image: template1,
      caption: "Plantilla 1"
    },
    {
      image: template2,
      caption: "Plantilla 2"
    },
    {
      image: template3,
      caption: "Plantilla 3"
    },
    {
      image: template4,
      caption: "Plantilla 4"
    }
  ];

  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleClick = () => {
    setAutoPlay(!autoPlay);
    console.log(`Plantilla seleccionada: ${selectedSlide + 1}`);
  };

  const handleSlideChange = (currentIndex) => {
    setSelectedSlide(currentIndex);
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Carousel 
          autoPlay={autoPlay}
          interval={2000}
          showThumbs={false}
          showIndicators={true}
          onChange={handleSlideChange}
          selectedItem={selectedSlide}
          dynamicHeight={true}
          infiniteLoop={true}
        >
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.caption} />
              <p className="legend">{item.caption}</p>
            </div>
          ))}
        </Carousel>
        <Button variant="contained" onClick={handleClick}>
          {autoPlay ? 'Selencionar Plantilla' : 'Quitar Selección'}
        </Button>
      </div>
    </div>
  );
}

export default App;
