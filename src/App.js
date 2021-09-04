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
      name: "Darkrai",
      image: "darkrai.jpg",
    },
    {
      name: "Deoxys",
      image: "deoxys.jpg",
    },
    {
      name: "Dragonite",
      image: "dragonite.jpg",
    },
    {
      name: "Dugtrio",
      image: "dugtrio.jpg",
    },
    {
      name: "Gengar",
      image: "gengar.jpeg",
    },
    {
      name: "Ho-oh",
      image: "hooh.jpg",
    },
    {
      name: "Lugia",
      image: "lugia.jpg",
    },
    {
      name: "Palkia",
      image: "palkia.jpg",
    },
    {
      name: "Pikachu",
      image: "pikachu.jpg",
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
        <div>
          <div>Pokemon Memory Game!</div>
          <div id="titleMessage">Try not to select the same Pokemon twice!</div>
        </div>
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
