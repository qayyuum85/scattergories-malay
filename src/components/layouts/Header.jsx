import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div style={headerStyle}>
            <h1>Scattergories!</h1>
            <Link to="/" style={linkStyle}>
                Home
            </Link>{" "}
            |{" "}<Link to="/categories" style={linkStyle}>Categories</Link>
            <h3>{props.category}</h3>
        </div>
    );
}

const headerStyle = {
    textAlign: "center",
    flex: "0 1 20vh"
}

const linkStyle = {
    textDecoration: "none",
    cursor: "pointer"
}

export default Header
