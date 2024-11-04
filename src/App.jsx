import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Game from "./Game";
import Api from "./Api/Product";

function App() {
  // the game has player and board
  // the board has 3 * 3 or (n * n) size
  // In board there are two symbol x and o or many
  // atleast 2  player can play
  // if two player are player then create 9 grid

  return (
    <>
      <h1>Game Started</h1>
      {/* <Game /> */}
      <Api />
    </>
  );
}

export default App;
