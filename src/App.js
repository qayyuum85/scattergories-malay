import React, {useState} from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Categories from "./components/Categories";
import Game from './components/Game'

function App() {
    const [words, setEnteredWord] = useState([]);

    const category = "country"
    const submitWord = (word) => {
        if (word.trim().length) {
            const wordScore = {
                word: word.trim(),
                score: 10
            }

            setEnteredWord([...words, wordScore]);
        }
    }
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header category={category}></Header>
                    <Route path="/" exact>
                        <p>A scattegories game!</p>
                        <button type="button">
                            <Link to="/categories">Select Categories</Link>
                        </button>
                    </Route>
                    <Route
                        path="/categories"
                        exact
                        render={(props) => <Categories {...props}></Categories>}
                    ></Route>
                    <Route
                        path="/game"
                        render={(props) => (
                            <Game
                                {...props}
                                words={words}
                                submitWord={submitWord}
                            ></Game>
                        )}
                    ></Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
