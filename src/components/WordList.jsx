import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Word from "./Word";

const initialState = 0;
function reducer(state, action) {
    switch (action.type) {
        case "getTotal":
            return action.words.reduce((acc, val) => {
                return acc + val.score;
            }, 0);
        default:
            return state;
    }
}

function WordList({ words, onUpdate }) {
    const [totalScore, setTotalScore] = useReducer(reducer, initialState);

    useEffect(() => {
        setTotalScore({ type: "getTotal", words });
        onUpdate(totalScore);
    }, [totalScore, words, onUpdate]);

    return (
        <div style={wordListStyle}>
            <div style={wordsStyle}>
                {words.map((wordScore, wordIndex) => {
                    const { word, score } = wordScore;
                    return (
                        <Word key={wordIndex} word={word} score={score}></Word>
                    );
                })}
            </div>

            <div style={totalStyle}>
                <div style={totalLabelStyle}>Total</div>
                <div style={totalScoreStyle}>{totalScore}</div>
            </div>
        </div>
    );
}

const wordListStyle = {
    flex: "0 1 60vh",
    display: "flex",
    flexFlow: "column wrap",
    overflowY: "auto"
};

const wordsStyle = {
    flex: "1 0",
};

const totalStyle = {
    display: "flex",
    padding: "1rem 0",
};

const totalLabelStyle = {
    flex: "10",
};
const totalScoreStyle = {
    flex: "1",
};

WordList.propTypes = {
    words: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default WordList;
