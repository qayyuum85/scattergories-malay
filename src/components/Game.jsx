import React, { useState, useCallback } from "react";
import WordList from "./WordList";
import AddWord from "./AddWord";
import Timer from "./Timer";

function Game(props) {
    const { words, submitWord, match, reset } = props;

    const [gameStatus, setGameStatus] = useState("notStarted");
    const [totalScore, setTotalScore] = useState(0);

    const handleStart = () => {
        setGameStatus("started");
    };

    const handleRestart = () => {
        reset()
        setGameStatus("started")
    }

    const onTimerEnd = useCallback(
        (status) => {
            setGameStatus(status);
        },
        [setGameStatus]
    );

    const onTotalScoreUpdate = useCallback(
        (total) => {
            setTotalScore(total);
        },
        [setTotalScore]
    );

    if (gameStatus === "started") {
        return (
            <div style={gameStyle}>
                <h3>{match.params.handle}</h3>
                <WordList
                    words={words}
                    onUpdate={onTotalScoreUpdate}
                ></WordList>
                <Timer time={60} onTimerEnd={onTimerEnd}></Timer>
                <AddWord submitWord={submitWord}></AddWord>
            </div>
        );
    }

    if (gameStatus === "notStarted") {
        return (
            <div style={gameStyle}>
                <div style={startGameStyle}>
                    <h3>{match.params.handle}</h3>
                    <button
                        style={startGameStartButtonStyle}
                        type="button"
                        onClick={handleStart}
                    >
                        Start Game!
                    </button>
                </div>
            </div>
        );
    }

    if (gameStatus === "end") {
        return (
            <div style={gameStyle}>
                <div>Your Score</div>
                <div>{totalScore}</div>
                <button
                        style={startGameStartButtonStyle}
                        type="button"
                        onClick={handleRestart}
                    >
                    Play again
                </button>
            </div>
        );
    }

    return null;
}

const gameStyle = {
    display: "flex",
    flexFlow: "column nowrap",
};

const startGameStyle = {
    flex: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    height: "100%",
};

const startGameStartButtonStyle = {
    padding: "16px 32px",
    marginTop: "30px",
    border: 0,
};

export default Game;
