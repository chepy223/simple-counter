//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import { SimpleCounter } from "./component/home.js";

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitFour={four % 10}
			digitThree={three % 10}
			digitTwo={two % 10}
			digitOne={one % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
