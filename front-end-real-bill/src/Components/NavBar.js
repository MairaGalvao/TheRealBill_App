import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "../css/navBar.css";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

export function NavBar() {
	let history = useHistory();
	function navNotShow() {
		document.getElementById("navMainBox").style.display = "none";
	}

	return (
		<>
			{/* <section>
        <h3 id="titleNavBar"> The Real Bill </h3>
      </section> */}

			<Box id="navBox">
				<Box style={{ display: "flex" }}>
					<Box
						className="nameNavBox"
						style={{ display: "flex", color: "yellow" }}
					>
						<Typography
							style={{
								fontSize: "20px",
								marginLeft: "5px",
								paddingTop: "7px",
								fontWeight: "700px",
								paddingRight: "0",
								letterSpacing: "3px",
							}}
							className="w3-bar-item"
						>
							The
						</Typography>
						<Typography
							className="w3-bar-item"
							style={{
								fontSize: "20px",
								letterSpacing: "2px",
								paddingTop: "7px",
							}}
						>
							<b> Real Bill </b>
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box id="navMainBox">
				<input
					class="menu-icon"
					type="checkbox"
					id="menu-icon"
					name="menu-icon"
				/>
				<label for="menu-icon"></label>
				<nav class="nav" style={{ position: "fixed" }}>
					<ul class="pt-5">
						<li>
							<a
								activeclassname="active"
								spy={true}
								smooth={true}
								onClick={() => {
									navNotShow();

									history.push("/livingindex");
								}}
							>
								Living Index
							</a>
						</li>
						<li>
							<a
								activeclassname="active"
								spy={true}
								smooth={true}
								onClick={() => {
									navNotShow();

									history.push("/");
								}}
							>
								The Real Bill
							</a>
						</li>
						<li>
							<a
								activeclassname="active"
								spy={true}
								smooth={true}
								onClick={() => {
									navNotShow();

									history.push("/lifestyleinfo");
								}}
							>
								LIfestyle Info
							</a>
						</li>

						<li>
							<a
								activeclassname="active"
								spy={true}
								smooth={true}
								onClick={() => {
									navNotShow();
									history.push("/contact");
								}}
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</Box>
		</>
	);
}
