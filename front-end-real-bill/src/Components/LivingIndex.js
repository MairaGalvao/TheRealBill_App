import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { LifestyleLevelMenu } from "./LifesyleLevelMenu";
import { NUMBEO_ACCESS_KEY } from "../App";
import walletPic from "../images/walletPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/livingIndex.css";

export default function LivingIndex() {
	const [cities, setCities] = useState([]);
	const [hints, setHints] = useState([]);
	const [hintsDesired, sethintsDesired] = useState([]);

	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");

	const [cityDesired, setcityDesired] = useState("");
	const [countryDesired, setcountryDesired] = useState("");

	let history = useHistory();
	const nameForm = useRef(null);
	useEffect(() => {
		fetch(`https://www.numbeo.com/api/cities?api_key=${NUMBEO_ACCESS_KEY}`)
			.then((res) => res.json())
			.then((cities) => {
				setCities(cities.cities);
			});
	}, [setCities]);

	const cityClick = (param) => {
		setCity(param.city);
		setCountry(param.country);
		setHints([]);
	};

	const cityClickDesired = (param) => {
		setcityDesired(param.city);
		setcountryDesired(param.country);
		sethintsDesired([]);
	};

	const handleHintsOrigin = (e) => {
		setCity(e.target.value);
		const filterCities = cities.filter((item) => {
			return item.city.toLowerCase().startsWith(e.target.value.toLowerCase());
		});
		console.log("setHints(filterCities)");
		setHints(filterCities);
	};

	const handleHintsDesired = (e) => {
		setcityDesired(e.target.value);
		const filterCities = cities.filter((item) => {
			return item.city.toLowerCase().startsWith(e.target.value.toLowerCase());
		});
		sethintsDesired(filterCities);
	};
	useEffect(() => {
		if (Aos) {
			Aos.init({});
		}
	}, [Aos]);
	return (
		<>
			<div className="livingIndexContainer">
				{/* <a href="https://front.codes/" class="logo" target="_blank">
					<img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
					<h1>Maira</h1>
				</a> */}
				<form
					className="inputs"
					noValidate
					autoComplete="off"
					required
					ref={nameForm}
				>
					<div class="section">
						<div class="container">
							<div class="row full-height justify-content-center">
								<div class="col-15 text-center align-self-center py-5">
									<div class="section pb-5 pt-5 pt-sm-2 text-center">
										<div style={{ position: "relative" }}></div>
										<h6 class="mb-0 pb-3"></h6>
										<input
											class="checkbox"
											type="checkbox"
											id="reg-log"
											name="reg-log"
										/>

										<label for="reg-log"></label>
										<div class="card-3d-wrap mx-auto">
											<div class="card-3d-wrapper">
												<div class="card-front">
													<div class="center-wrap">
														<div class="section text-center">
															<span>Origin Destination</span>{" "}
															<div
																class="form-group"
																style={{ paddingTop: "5px" }}
																// style={{ backgroundColor: "#1f2029" }} rewrite like this doesnt work, check why
															>
																<input
																	style={{ padding: "20px" }}
																	type="city"
																	class="form-style"
																	placeholder="City"
																	autocomplete="off"
																	id="input-city-origin"
																	name="cityOrigin"
																	label="Origin City"
																	required
																	value={city}
																	onChange={(e) => handleHintsOrigin(e)}
																/>
																<ul>
																	{hints.slice(0, 3).map((item) => {
																		return (
																			<li
																				key={item.city_id}
																				onClick={() => cityClick(item)}
																			>
																				{item.city}
																			</li>
																		);
																	})}
																</ul>
															</div>
															<div
																class="form-group mt-2"
																style={{ paddingTop: "10px" }}
															>
																<input
																	style={{ padding: "20px" }}
																	class="form-style"
																	placeholder="Country"
																	autocomplete="off"
																	id="input-country-origin"
																	name="countryOrigin"
																	label="Origin Country"
																	required
																	value={country}
																	onChange={(e) => handleHintsOrigin(e)}
																/>
																<ul>
																	{hints.slice(0, 5).map((item) => {
																		return (
																			<li
																				key={item.city_id}
																				onClick={() => cityClick(item)}
																			>
																				{item.country}
																			</li>
																		);
																	})}
																</ul>
															</div>
															<p
																class="mb-0 mt-4 text-center"
																style={{ marginTop: "30px" }}
															>
																<a
																	href="#"
																	class="link"
																	title="Life Style Info"
																	activeclassname="active"
																	spy={true}
																	smooth={true}
																	onClick={() => {
																		history.push("/lifestyleinfo");
																	}}
																>
																	Want to know more about the lyfestyle options?
																</a>
															</p>
														</div>
													</div>
												</div>

												{/* card back  */}
												<div class="card-back">
													<div class="center-wrap">
														<div class="section text-center">
															<span>Desired Destination</span>{" "}
															<LifestyleLevelMenu />{" "}
															<div
																class="form-group"
																style={{ paddingTop: "5px" }}
																// style={{ backgroundColor: "#1f2029" }} rewrite like this doesnt work, check why
															>
																<input
																	style={{ padding: "20px" }}
																	type="city"
																	class="form-style"
																	placeholder="City"
																	autocomplete="off"
																	id="input-city-desired"
																	name="cityDesired"
																	label="Desired City"
																	required
																	value={cityDesired}
																	onChange={(e) => handleHintsDesired(e)}
																/>
																<ul>
																	{hintsDesired.slice(0, 3).map((item) => {
																		return (
																			<li
																				key={item.city_id}
																				onClick={() => cityClickDesired(item)}
																			>
																				{item.city}
																			</li>
																		);
																	})}
																</ul>
															</div>
															<div
																class="form-group mt-2"
																style={{ paddingTop: "10px" }}
															>
																<input
																	style={{ padding: "20px" }}
																	class="form-style"
																	placeholder="Country"
																	autocomplete="off"
																	id="input-country-desired"
																	name="countryDesired"
																	label="Desired Country"
																	value={countryDesired}
																	required
																	onChange={(e) => handleHintsDesired(e)}
																/>
															</div>
															<a
																href="#"
																class="btn mt-4"
																style={{ marginTop: "20px" }}
																onClick={() => {
																	const form = nameForm.current;
																	const oCity = form["cityOrigin"].value;
																	const oCountry = form["countryOrigin"].value;
																	const dCity = form["cityDesired"].value;
																	const dCountry = form["countryDesired"].value;
																	history.push(
																		`/therealbill?oCity=${oCity}&oCountry=${oCountry}&dCity=${dCity}&dCountry=${dCountry}`
																	);
																}}
															>
																Real Bill
															</a>
															<p
																class="mb-0 mt-4 text-center"
																style={{ marginTop: "30px" }}
															>
																<a
																	href="#"
																	class="link"
																	title="Life Style Info"
																	activeclassname="active"
																	spy={true}
																	smooth={true}
																	onClick={() => {
																		history.push("/lifestyleinfo");
																	}}
																>
																	Want to know more about the lyfestyle options?
																</a>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
