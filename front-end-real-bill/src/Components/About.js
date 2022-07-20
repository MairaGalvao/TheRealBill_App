import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import pppPic from "../images/pppPic.jpg";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/about.css";

export function About() {
	function navNotShow() {
		document.getElementById("navMainBox").style.display = "none";
	}
	let history = useHistory();
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<div class="mainTitle" data-aos="fade-out">
				<div class="subTitleMain">
					<div class="livingIndexText">
						<h1 class="h1LivingIndex">
							<span class="spanLivingIndex">Living</span>
							<div class="message">
								<div class="word1">Index</div>
								<div class="word2">Cost</div>
							</div>
						</h1>
					</div>
					<div class="textMain">
						<h1 class="textLeft">
							{" "}
							<span>An</span>
							<span>Application</span>
							<span>that</span>
							<span>provides</span>
							<span>information</span>
							<span>about</span>
							<span>the</span>
							<span>living</span>
							<span>index.</span>
							<span>Theory</span>
							<span>based</span>
							<span>on</span>
							<span>the</span>
							<span>Purchasing</span>
							<span>Power</span>
							<span>Parity</span>
							<span>.</span>
						</h1>
					</div>
					<button class="btnStart">
						{" "}
						<a
							class="learnText"
							activeclassname="active"
							to="livingindex"
							spy={true}
							smooth={true}
							onClick={() => {
								history.push("/livingindex");
							}}
						>
							Check it out
						</a>
					</button>
				</div>

				<div class="basic-card basic-card-light">
					<div class="card-content">
						<span class="card-title">The Real Bill offers the following</span>
						<ul>
							<li class="card-text">
								Living cost in more than 20.000 cities worldwide;
							</li>
							<Divider />

							<li class="card-text">
								Prices based on{" "}
								<a
									target="_blank"
									href="https://www.numbeo.com/cost-of-living/"
								>
									{" "}
									Numbeo{" "}
								</a>{" "}
								living costs database. It is the largest database of cost of
								living in the world;
							</li>
							<Divider />
						</ul>
					</div>

					<div class="card-link">
						<a
							href="#"
							title="Life Style Info"
							activeclassname="active"
							spy={true}
							smooth={true}
							onClick={() => {
								navNotShow();

								history.push("/lifestyleinfo");
							}}
						>
							<span id="lifeStyleBtn">Lifestyle Info</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
