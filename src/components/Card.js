import React from "react";

const Card = ({ name, image, onCardClick, onCardsChosen }) => {
  return (
    <div className="card" onClick={() => onCardClick(name)}>
      <img src={image} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
