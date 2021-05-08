import React, { useState } from "react";
import "../App.css";



const TicTac = ({winner,setWinner,game,setGame,open,setOpen}) => {

  

  const [player, setPlayer] = useState(1);
 

  const handleClick = (e, i1, i2) => {
    let newGame = game;
    console.log(i1, i2);
    if (player === 1) {
      newGame[i1][i2] = "X";
      setGame(newGame);
      setPlayer(2);
    } else {
      newGame[i1][i2] = "O";
      setGame(newGame);
      setPlayer(1);
    }

    checkWinner(player);
    console.log(newGame);
  };
  
  const checkWinner = (player) => {
    if (
      (game[0][0] === game[0][1] &&
        game[0][1] === game[0][2] &&
        game[0][2] !== -1) ||
      (game[1][0] === game[1][1] &&
        game[1][1] === game[1][2] &&
        game[1][2] !== -1) ||
      (game[2][0] === game[2][1] &&
        game[2][1] === game[2][2] &&
        game[2][2] !== -1) ||
      (game[0][0] === game[1][0] &&
        game[1][0] === game[2][0] &&
        game[2][0] !== -1) ||
      (game[0][1] === game[1][1] &&
        game[1][1] === game[2][1] &&
        game[2][1] !== -1) ||
      (game[0][2] === game[1][2] &&
        game[1][2] === game[2][2] &&
        game[2][2] !== -1) ||
      (game[0][0] === game[1][1] &&
        game[1][1] === game[2][2] &&
        game[2][2] !== -1) ||
      (game[0][2] === game[1][1] &&
        game[1][1] === game[2][0] &&
        game[2][0] !== -1)
    ) {
      setWinner(player);
      setOpen(true);
      //  alert("winner is player:" + winner)
      // setGame([
      //   [-1, -1, -1],
      //   [-1, -1, -1],
      //   [-1, -1, -1],
      // ]);
    } else if (
      game[0][0] !== -1 &&
      game[0][1] !== -1 &&
      game[0][2] !== -1 &&
      game[1][0] !== -1 &&
      game[1][1] !== -1 &&
      game[1][2] !== -1 &&
      game[2][0] !== -1 &&
      game[2][1] !== -1 &&
      game[2][2] !== -1 &&
      game[0][0] !== -1 &&
      game[1][0] !== -1 &&
      game[2][0] !== -1 &&
      game[0][1] !== -1 &&
      game[1][1] !== -1 &&
      game[2][1] !== -1 &&
      game[0][2] !== -1 &&
      game[1][2] !== -1 &&
      game[2][2] !== -1 &&
      game[0][0] !== -1 &&
      game[1][1] !== -1 &&
      game[2][2] !== -1 &&
      game[0][2] !== -1 &&
      game[1][1] !== -1 &&
      game[2][0] !== -1
    ){
      setWinner('Game drawn')
      setOpen(true);
    }
    //  {
    //   alert("Game drawn");
    //   setGame([
    //     [-1, -1, -1],
    //     [-1, -1, -1],
    //     [-1, -1, -1],
    //   ]);
    
  }
  
  // }



  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div style={{ display: "grid", justifyContent: "center" }}>
        {/* {winner && (
          <div
            style={{
              fontFamily: "cursive",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            winner is player :{winner}
          </div>
        )} */}
        <center style={{position: 'inherit'}}>
          <table style={{ width: "300px", height: "150px", marginTop: "50px" }}>
            {game && game.length > 0
              ? game.map((item, index0) => {
                  return (
                    <tr key={index0}>
                      {item.map((value, index1) => {
                        return (
                          <td>
                            {parseInt(game[index0][index1]) !== -1 ? (
                              value
                            ) : (
                              <button
                                key={index1}
                                onClick={(e) => handleClick(e, index0, index1)}
                                style={{
                                  paddingBottom: "15px",
                                  paddingTop: "15px",
                                }}
                              >
                                <h3> </h3>
                              </button>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : null}
          </table>
        </center>
        {/* <div> 

             <button onClick={reset} style={{height:'30px', width:'80px',marginTop:"15px"}}> Reset</button>
            </div>  */}
      </div>
    </div>
  );
};


export default TicTac;
