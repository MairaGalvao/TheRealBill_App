import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import pppPic from "../images/pppPic.jpg";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/about.css";

export function About() {
	let history = useHistory();
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			{/* <hr class="dividerAbout"></hr> */}
			{/* <h1 class="livingIndexTitle">The Living index</h1> */}

			{/* <img class="img" src={pppPic} /> */}

			<div class="mainTitle" data-aos="fade-out">
				<div class="subTitleMain">
					<div class="livingIndexText">
						<h1 class="title1" id="staticTitle">
							Living
						</h1>
						<h1 class="title1" id="non-static-text">
							{" "}
							index
						</h1>
					</div>
					<div class="textMain">
						<p class="textLeft">
							{" "}
							If you want to live cheap, and you can move to any country in the
							world,
							<br />
							compare prices of Big Mac according to the theory of Index Big
							Mac.
							<br /> But why not compare the living index?{" "}
						</p>
					</div>
					<button class="btnStart">
						{" "}
						<div className="learnText">Learn How</div>
						{/* <p className="btnText">Learn how</p> */}
					</button>
				</div>

				<div class="mainAbout">
					<div class="textWrap">
						<h6 class="phoneText1">
							Living cost in more than 20.000 cities worldwide.
						</h6>
						<div class="smallText1">llllllllllllllllllllllllll</div>
					</div>
					<div class="textWrap">
						<h6 class="phoneText1">
							Living cost in more than 20.000 cities worldwide.
						</h6>
						<div class="smallText1">llllllllllllllllllllllllll</div>
					</div>
					<div class="textWrap">
						<h6 class="phoneText1">
							Living cost in more than 20.000 cities worldwide.
						</h6>
						<div class="smallText1">llllllllllllllllllllllllll</div>
					</div>
					<div class="textWrap">
						<h6 class="phoneText1">
							Living cost in more than 20.000 cities worldwide.
						</h6>
						<div class="smallText1">llllllllllllllllllllllllll</div>
					</div>
				</div>
			</div>
		</>
	);
}
