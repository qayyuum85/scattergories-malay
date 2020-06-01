import React from "react";
import PropTypes from "prop-types";

function Word(props) {
    const { word, score } = props;
    return (
        <div style={wordStyleContainer}>
            <div style={wordStyle}>{word}</div>
            <div style={scoreStyle}>{score}</div>
        </div>
    );
}

const wordStyleContainer = {
    display: "flex",
    flexFlow: "row no wrap",
};

const wordStyle = {
    flex: "10"
};

const scoreStyle = {
    flex: "1"
};

Word.propTypes = {
    word: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
};

export default Word;
