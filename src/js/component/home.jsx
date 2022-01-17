import React from "react";
//import Counter from "./counter.jsx";
//create your first component
const Home = (props) => {
	var i = 0;

	setInterval(function () {
		var six = Math.floor(i / 100000);
		var five = Math.floor(i / 10000);
		var four = Math.floor(i / 1000);
		var three = Math.floor(i / 100);
		var two = Math.floor(i / 10);
		var one = Math.floor(i / 1);
		i++;
		console.log("hi");
		console.log(two);
	}, 1000);

	return (
		<>
			<h1>
				MY COUNTER {six}
				{five}
				{four}
				{three}
				{two}
				{one}
			</h1>
			
		</>
	);
};

export default Home;
