import React from 'react'
import WordList from "./WordList"
import AddWord from './AddWord'
import ProgressBar from './ProgressBar'

function Game({words, submitWord, category}) {
    return (
        <div>
            <h3>{category}</h3>
            <WordList words={words}></WordList>
            <ProgressBar bgColor={"red"} completed={50}></ProgressBar>
            <AddWord submitWord={submitWord}></AddWord>
        </div>
    )
}

export default Game
