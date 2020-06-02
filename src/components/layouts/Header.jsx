import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={headerStyle}>
            <h1 style={headerTitle}>Bjerk!</h1>
            <Link to="/" style={linkStyle}>
                Home
            </Link>{" "}
            |{" "}
            <Link to="/categories" style={linkStyle}>
                Categories
            </Link>
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

export default Header;
