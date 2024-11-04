import { useEffect, useState } from "react";

function Board() {
  const p1 = "o";
  const p2 = "x";

  const [count, setCount] = useState(1);
  const [turn, setTurn] = useState(0);
  let [player1, setPlayer1] = useState("");
  let [player2, setPlayer2] = useState("");
  let [boardList, setboardList] = useState(Array(9).fill(null));

  const winnerObj = ["123", "456", "789", "147", "258", "369", "159", "357"];

  function winnerStergy(player, winner) {
    for (let i = 0; i < winnerObj.length; i++) {
      if (player.includes(winnerObj[i])) {
        console.log(`winner is ${winner}`);
      }
    }
    // console.log("winner");
  }

  const symbolHandle = (e) => {
    // console.log(e.target.dataset.val);
    let tg = e.target.dataset.val;

    if (turn === 0) {
      e.target.innerText = String(p1);
      player1 = player1 + tg;
      setPlayer1(player1);
      console.log("player1:==> " + player1);
      winnerStergy(player1, "player1");
      setTurn(turn + 1);
    } else {
      e.target.innerText = String(p2);
      player2 = player2 + tg;
      setPlayer2(player2);
      console.log("player2:==> " + player2);
      winnerStergy(player2, "player2");
      setTurn(turn - 1);
    }
  };

  return (
    <div className="board-container">
      <div className="board-contain">
        {[...Array(9)].map((_, i) => {
          return (
            <span
              key={i}
              className="cell"
              onClick={symbolHandle}
              data-val={i + 1}
            >
              {boardList[i]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
