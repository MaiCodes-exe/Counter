import react from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = (propTypes) => {
	return (
		<>
			<div className="box">
				<div className="counter">
					<div className="clock">
						<FontAwesomeIcon
							icon={faClock}
							style={{ fontSize: "30px" }}
						/>
					</div>
					<div className="seconds">
						<div className="tobias">{propTypes.digitSix}</div>
						<div className="tobias">{propTypes.digitFive}</div>
						<div className="tobias">{propTypes.digitFour}</div>
						<div className="tobias">{propTypes.digitThree}</div>
						<div className="tobias">{propTypes.digitTwo}</div>
						<div className="tobias">{propTypes.digitOne}</div>
					</div>
				</div>
			</div>
		</>
	);
};
Counter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
export default Counter;
