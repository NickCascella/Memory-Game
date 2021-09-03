import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";

function App() {
  const [currentCards, setCurrentCards] = useState([
    {
      name: "Snorlax",
      image: "snorlax.jpg",
    },
    {
      name: "Psyduck",
      image: "psyduck.png",
    },
    {
      name: "Groudon",
      image: "groudon.jpg",
    },
    {
      name: "Test-Hello",
      image: "icael.png",
    },
    {
      name: "Test-Hi",
      image: "icael.png",
    },
    {
      name: "Test-Wee",
      image: "icael.png",
    },
    {
      name: "Test-fdf",
      image: "icael.png",
    },
    {
      name: "Test-7",
      image: "icael.png",
    },
    {
      name: "Test-8",
      image: "icael.png",
    },
    {
      name: "Test-9",
      image: "icael.png",
    },
  ]);

  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleCards = () => {
    setCurrentCards(shuffle(currentCards));
  };

  return (
    <div>
      <header>
        <div>Pokemon Memory Game!</div>
        <div id="scoresContainer">
          <div id="highScore">Highscore: {highScore}</div>
          <div id="score">Score: {score}</div>
        </div>
      </header>
      <div id="appGrid">
        <Grid
          cards={currentCards}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          shuffleCards={shuffleCards}
          setScore={setScore}
          score={score}
          setHighScore={setHighScore}
          highScore={highScore}
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
