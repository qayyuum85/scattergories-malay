import React, { useState, useEffect } from "react";
import axios from "axios";

const EditWord = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const getWords = async () => {
            try {
                const words = await axios.get("http://localhost:7777/api/word");
                setWords(words.data);
            } catch (error) {
                console.error(`Error when retrieving data: ${error}`);
            }
        };
        getWords();
    }, []);

    return (
        <div style={editWordContainer}>
            <div style={headerCatStyle}>Text</div>
            <div style={headerScoreStyle}>Score</div>
            <div style={headerEditStyle}>Edit</div>
            {words.map((word) => {
                const { word_id: id, text, score } = word;
                return (
                    <React.Fragment key={id}>
                        <div style={bodyCatStyle}>{text}</div>
                        <div style={bodyScoreStyle}>{score}</div>
                        <div style={bodyEditStyle}></div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const editWordContainer = {
    flex: "1 1",
    overflowY: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "30px auto",
    gridGap: "10px"
};
const headerCatStyle = {
};
const headerScoreStyle = {
};
const headerEditStyle = {
};
const bodyCatStyle = {
    height: "30px"
};
const bodyScoreStyle = {
    height: "30px"
};
const bodyEditStyle = {
    height: "30px"
};

export default EditWord;
