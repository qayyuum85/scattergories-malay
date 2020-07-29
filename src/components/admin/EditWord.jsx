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

    const handleChange = (event, id) => {
        console.log(event.target.name, event.target.value, id);

        const editedWordIdx = words.findIndex((word)=>{
            return word.word_id === id
        })

        const copy = [...words];

        copy[editedWordIdx][event.target.name] = event.target.value;

        setWords(copy);
    }

    return (
        <div style={editWordContainer}>
            <div style={headerCatStyle}>Category</div>
            <div style={headerCatStyle}>Text</div>
            <div style={headerScoreStyle}>Score</div>
            <div style={headerEditStyle}>Edit</div>
            {words.map((word) => {
                const { word_id: id, text, score, category } = word;
                return (
                    <React.Fragment key={id}>
                        <div style={bodyCatStyle}>
                            {category.name}
                        </div>
                        <div style={bodyCatStyle}>
                            <input type="text" name="text" id="" value={text}  onChange={(e) => handleChange(e, id)}/>
                        </div>
                        <div style={bodyScoreStyle}>
                            <input type="text" name="score" id="" value={score}  onChange={(e) => handleChange(e, id)}/>
                        </div>
                        <div style={bodyEditStyle}>
                            <button type="button">Save</button>
                            <button type="button">Remove</button>
                        </div>
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
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "30px auto",
    gridGap: "10px",
};
const headerCatStyle = {};
const headerScoreStyle = {};
const headerEditStyle = {};
const bodyCatStyle = {
    height: "30px",
};
const bodyScoreStyle = {
    height: "30px",
};
const bodyEditStyle = {
    height: "30px",
};

export default EditWord;
