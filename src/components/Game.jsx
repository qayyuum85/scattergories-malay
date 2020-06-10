import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WordList from "./WordList";
import AddWord from "./AddWord";
import Timer from "./Timer";
import fzSort from "fuzzysort";

function Game(props) {
    const { match, location } = props;

    const [gameData, setGameData] = useState([]);
    const [gameStatus, setGameStatus] = useState("notStarted");
    const [totalScore, setTotalScore] = useState(0);

    const [words, setEnteredWord] = useState([]);

    const submitWord = (word) => {
        if (word.trim().length) {
            const options = {
                limit: 3,
                allowTypo: true,
                threshold: -10000,
                key: "text",
            };

            const result = fzSort.go(
                word,
                gameData,
                options
            );

            if (result.length) {
                const bestMatch = result[0].obj;

                if (words.map((w) => w.word).includes(bestMatch.name, 0)) {
                    console.log("same word entered");
                    return;
                }

                setEnteredWord([
                    ...words,
                    {
                        word: bestMatch.text,
                        score: bestMatch.score,
                    },
                ]);

                return;
            }

            setEnteredWord([
                ...words,
                {
                    word,
                    score: 0,
                },
            ]);
        }
    };

    const resetWord = () => {
        setEnteredWord([]);
    };

    const handleStart = () => {
        setGameStatus("started");
    };

    const handleRestart = () => {
        resetWord();
        setGameStatus("started");
    };

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

    const handleSubmitWord = (word) => {
        submitWord(word, match.params.handle);
    };

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `http://localhost:7777/api/word/${match.params.handle}`
            );
            setGameData(result.data);
        }

        fetchData();
    }, [match.params.handle]);

    if (gameStatus === "started") {
        return (
            <div style={gameStyle}>
                <h3>{location.state.categoryName}</h3>
                <WordList
                    words={words}
                    onUpdate={onTotalScoreUpdate}
                ></WordList>
                <Timer time={60} onTimerEnd={onTimerEnd}></Timer>
                <AddWord submitWord={handleSubmitWord}></AddWord>
            </div>
        );
    }

    if (gameStatus === "notStarted") {
        return (
            <div style={gameStyle}>
                <div style={startGameStyle}>
                    <h3>{location.state.categoryName}</h3>
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
