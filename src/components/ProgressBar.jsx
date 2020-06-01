import React from "react";
import PropTypes from 'prop-types'
function ProgressBar(props) {
    const { bgColor, completed } = props;

    const containerStyle = {
        flex: "10",
        borderRadius: 50,
        width: "100%",
        backgroundColor: "#e0e0de",
        margin: "10px 0"
    };

    const barStyle = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgColor,
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 1s ease-in-out"
    };

    const labelStyle = {
        padding: 5,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyle}>
            <div style={barStyle}>
                <span style={labelStyle}></span>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    bgColor: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired
}

export default ProgressBar;
