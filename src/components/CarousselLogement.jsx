import React, { useState } from "react";

const CarousselLogement = ({ images }) => {
  const [index, setIndex] = useState(0);

  const arrowLeft = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const arrowRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container__caroussel">
      <img
        src="/images/arrow_left.png"
        alt="fleche de gauche"
        className="caroussel__button--left"
        onClick={arrowLeft}
      />
      <div className="caroussel__image">
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="carousel__image"
        />
        <div className="caroussel__counter">
          {index + 1} / {images.length}
        </div>
      </div>
      <img
        src="/images/arrow_right.png"
        alt="fleche de droite"
        className="caroussel__button--right"
        onClick={arrowRight}
      />
    </div>
  );
};

export default CarousselLogement;
