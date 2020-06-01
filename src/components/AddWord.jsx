import React, { useState } from "react";
import PropTypes from "prop-types";

function AddWord(props) {
    const [word, setWord] = useState("");

    const handleChange = (event) => {
        setWord(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitWord(word);
        setWord("");
    };

    const handleEnter = (event) => {
        if (event.keycode === 13) {
            props.submitWord(word);
            setWord("");
        }
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                type="text"
                name="word"
                onChange={handleChange}
                value={word}
                style={inputStyle}
                onKeyPress={handleEnter}
                placeholder={"Answer..."}
            />
            <button style={buttonStyle} type="submit">
                Submit
            </button>
        </form>
    );
}

const formStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    height: "32px",
};

const inputStyle = {
    flex: 10,
    padding: "0 1rem",
};

const buttonStyle = {
    flex: 1,
    display: "inline-block",
    border: 0,
    cursor: "pointer",
    padding: "7px 22px",
};

AddWord.propTypes = {
    submitWord: PropTypes.func.isRequired,
};

export default AddWord;
