import React from "react";

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const RED_STARS = rating;

  return (
    <div className="star-rating">
      {[...Array(MAX_STARS)].map((_, index) => (
        <i
          key={index}
          className={index < RED_STARS ? "fas fa-star red" : "fas fa-star"}
        />
      ))}
    </div>
  );
};

export default StarRating;
