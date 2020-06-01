import React from "react";
import PropTypes from 'prop-types'
function ProgressBar(props) {
    const { bgcolor, completed } = props;

    const containerStyle = {
        height: "32px",
        borderRadius: 50,
        width: "100%",
        margin: "0 10px",
        backgroundColor: "#e0e0de",
    };

    const barStyle = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
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
                <span style={labelStyle}>{completed}</span>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    bgColor: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired
}

export default ProgressBar;
