import React from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
//create your first component
function SimpleCounter(props) {
	return (
		<div className="box">
			<div className="counter">
				<div className="clock">
					<FontAwesomeIcon
						icon={faClock}
						style={{ fontSize: "30px" }}
					/>
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
	);
}
SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<SimpleCounter digitOne={counter.indexOf()} />,
		document.querySelector("#app")
	);
}, 1000);

export default Home;
