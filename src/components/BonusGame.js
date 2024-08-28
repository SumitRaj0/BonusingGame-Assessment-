import React, { useState } from "react";
import "./BonusGame.css";

const BonusGame = () => {
  const [winArray, setWinArray] = useState([100, 200, 300, 400, 500, 600]);
  const [usedWins, setUsedWins] = useState([]);
  const [clickedIcon, setClickedIcon] = useState(null);

  const getRandomWin = () => {
    const availableWins = winArray.filter((win) => !usedWins.includes(win));

    if (availableWins.length === 0) {
      alert("No more unique wins available!");
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableWins.length);
    return availableWins[randomIndex];
  };

  const handleIconClick = (iconId) => {
    const winAmount = getRandomWin();
    if (winAmount !== null) {
      setUsedWins((prevUsedWins) => [...prevUsedWins, winAmount]);
      setClickedIcon({ iconId, winAmount });
    }
  };

  return (
    <div className="bonus-game">
      <div className="frame-container">
        <img src="/BonusFrame.png" alt="Bonus Frame" className="bonus-frame" />
        <div className="icons-container">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              id={`icon-${index}`}
              className="icon"
              onClick={() => handleIconClick(`icon-${index}`)}
            >
              <img src="/bonusIcon.png" alt="Bonus Icon" />
              {clickedIcon?.iconId === `icon-${index}` && (
                <div className="win-amount">{clickedIcon.winAmount}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusGame;
