import React, { useState } from "react";
import Card from "./Card";

const someRandomVariable = 69;

const Grid = (props) => {
  const {
    cards,
    chosenCards,
    shuffleCards,
    setChosenCards,
    setScore,
    score,
    setHighScore,
    highScore,
  } = props;

  const handleCardClick = (name) => {
    let chosenCardsCopy = [];
    chosenCardsCopy.push(name);
    shuffleCards();
    if (chosenCards.includes(name)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setChosenCards([]);
    } else if (!chosenCards.includes(name)) {
      setScore(score + 1);
      setChosenCards(chosenCards.concat(chosenCardsCopy));
    }
  };

  const renderCards = () => {
    return cards.map((displayedCard) => {
      return (
        <Card
          name={displayedCard.name}
          image={displayedCard.image}
          onCardClick={handleCardClick}
          onCardsChosen={chosenCards}
        />
      );
    });
  };

  return <div id="gameGrid">{renderCards()}</div>;
};

export default Grid;
export { someRandomVariable };
