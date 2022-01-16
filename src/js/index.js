//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
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
					<div className="tobias">{props.digitSix % 10}</div>
					<div className="tobias">{props.digitFive % 10}</div>
					<div className="tobias">{props.digitFour % 10}</div>
					<div className="tobias">{props.digitThree % 10}</div>
					<div className="tobias">{props.digitTwo % 10}</div>
					<div className="tobias">{props.digitOne % 10}</div>
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
		<SimpleCounter
			digitSix={six}
			digitFive={five}
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}, 10);
