import react from "react";
import propTypes from "prop-types";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
    return (
        <>
            <div className="box">
                <div className="counter">
                    <div className="clock">
                        <FontAwesomeIcon icon={faClock} style={{ fontSize: "30px" }} />
                    </div>
                    <div className="seconds">
                    <div className="tobias">{props.digitSix}</div>
                    <div className="tobias">{props.digitFive}</div>
                    <div className="tobias">{props.digitFour}</div>
                    <div className="tobias">{props.digitThree}</div>
                    <div className="tobias">{props.digitTwo}</div>
                    <div className="tobias">{props.digitOne}</div>
                </div>
                </div>
            </div>
        </>
    );
};
SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
export default Counter;
