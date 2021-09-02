import "./App.css";
import React, { useState } from "react";
import Grid, { someRandomVariable } from "./components/Grid";

function App() {
  const [currentCards, setCurrentCards] = useState([
    {
      name: "Snorlax",
      image: "snorlax.jpg",
    },
    {
      name: "Test-Lucy",
      image: "lucy.png",
    },
    {
      name: "Test-Icael",
      image: "icael.png",
    },
  ]);

  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    setCurrentCards(shuffle(currentCards));
  };

  return (
    <div>
      <header>Memory Game</header>
      <div>{score}</div>
      <div id="Grid">
        <Grid
          cards={currentCards}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          shuffleCards={shuffleCards}
          setScore={setScore}
          score={score}
        />
      </div>
    </div>
  );
}

const shuffle = (arr) => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default App;
