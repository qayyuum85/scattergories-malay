import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import { Router, Route, Link, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Categories from "./components/Categories";
import Game from "./components/Game";
import history from "./utils/history";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ExternalAPI from './components/ExternalAPI'

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router history={history}>
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <Switch>
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
                            render={(props) => (
                                <Categories {...props}></Categories>
                            )}
                        ></Route>
                        <Route
                            path="/categories/:handle"
                            render={(props) => <Game {...props}></Game>}
                        ></Route>
                        <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
                    </Switch>
                    <footer>
                        <ExternalAPI></ExternalAPI>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;
