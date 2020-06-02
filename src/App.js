import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Game from "./components/Game";
import gameData from "./assets/gamedata.json";
import fzSort from "fuzzysort";

function App() {
    const [words, setEnteredWord] = useState([]);

    const submitWord = (word, category) => {
        if (word.trim().length) {
            const options = {
                limit: 3,
                allowTypo: true,
                threshold: -10000,
                key: "name",
            };

            const foundIndex = gameData.categories.findIndex((cat) => {
                return cat.category === category;
            });

            if (foundIndex >= 0) {
                const result = fzSort.go(
                    word,
                    gameData.categories[foundIndex].data,
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
                            word: bestMatch.name,
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
        }
    };

    const resetWord = () => {
        setEnteredWord([]);
    };

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <Route
                        path="/"
                        exact
                        render={() => {
                            return (
                                <div>
                                    <p>A scattegories game!</p>
                                    <button type="button">
                                        <Link to="/categories">
                                            Select Categories
                                        </Link>
                                    </button>
                                </div>
                            );
                        }}
                    ></Route>
                    <Route
                        path="/categories"
                        exact
                        render={(props) => <Categories {...props}></Categories>}
                    ></Route>
                    <Route
                        path="/categories/:handle"
                        render={(props) => (
                            <Game
                                {...props}
                                words={words}
                                submitWord={submitWord}
                                reset={resetWord}
                            ></Game>
                        )}
                    ></Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
