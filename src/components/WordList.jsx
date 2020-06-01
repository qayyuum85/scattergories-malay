import React from "react";
import PropTypes from "prop-types";
import Word from "./Word";

function WordList({words}) {
    return (
        <div style={wordListStyle}>
            <div style={wordsStyle}>
                {words.map((wordScore) => {
                    const { word, score } = wordScore;
                    return <Word word={word} score={score}></Word>;
                })}
            </div>

            <div style={totalStyle}>
                <div style={totalLabelStyle}>Total</div>
                <div style={totalScoreStyle}>
                    {words.reduce((acc, val) => {
                        return acc + val.score;
                    }, 0)}
                </div>
            </div>
        </div>
    );
}

const wordListStyle = {
    flex: "0 1 60vh",
    display: "flex",
    flexFlow: "column wrap",
};

const wordsStyle = {
    flex: "1 0"
}

const totalStyle = {
    display: "flex",
    padding: "1rem 0"
};

const totalLabelStyle = {
    flex: "10"
}
const totalScoreStyle = {
    flex: "1"
}

WordList.propTypes = {
    words: PropTypes.array.isRequired,
};

export default WordList;
