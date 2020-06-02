import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

function Timer({ time, onTimerEnd }) {
    const [timeLeft, setTimeLeft] = useState(time);
    const bgColor = "#ff0000";

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
                return;
            }

            clearTimeout(timerId);
            onTimerEnd("end");
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [timeLeft, onTimerEnd]);

    return (
        <div style={timerContainer}>
            <div style={timeLeftStyle}>{timeLeft}</div>
            <ProgressBar
                bgColor={bgColor}
                completed={parseInt(((timeLeft / time) * 100).toFixed(0))}
            ></ProgressBar>
        </div>
    );
}

const timerContainer = {
    display: "flex",
    flexFlow: "row nowrap",
};

const timeLeftStyle = {
    flex: "0 1 24px",
    borderRadius: "50%",
    backgroundColor: "#ff0000",
    color: "#fff",
    width: "24px",
    height: "24px",
    margin: "10px 0",
    textAlign: "center"
};

Timer.propTypes = {
    time: PropTypes.number.isRequired,
    onTimerEnd: PropTypes.func.isRequired
};

export default Timer;
