import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

function Header() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div style={headerStyle}>
            <h1 style={headerTitle}>Bjerk!</h1>
            <div style={linkContainerStyle}>
                <div>
                    <Link to="/" style={linkStyle}>
                        Home
                    </Link>
                    &nbsp; |&nbsp;{" "}
                    <Link style={linkStyle} to="/profile">
                        Profile
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to="/categories" style={linkStyle}>
                        Categories
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to="/admin/edit" style={linkStyle}>
                        Edit Word
                    </Link>
                </div>
                <div>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>
                            Log in
                        </button>
                    )}
                    {isAuthenticated && (
                        <button onClick={() => logout()}>Log out</button>
                    )}
                </div>
            </div>
        </div>
    );
}

const headerStyle = {
    textAlign: "center",
    flex: "0 1 15vh",
};

const headerTitle = {
    fontFamily: "Botsmatic Demo",
};

const linkStyle = {
    textDecoration: "none",
    cursor: "pointer",
};

const linkContainerStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between"
}

export default Header;
