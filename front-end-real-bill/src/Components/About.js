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
      <Box data-aos="fade-out">
        <hr class="dividerAbout"></hr>
        <h1 class="livingIndexTitle">The Living index</h1>
        <Box class="boxPic">
          <img class="img" src={pppPic} />
          <div>
            <input
              class="inputBox"
              type="radio"
              name="sushi-lunch"
              id="happy-radio"
            />
            <input
              class="inputBox"
              type="radio"
              name="sushi-lunch"
              id="lovers-radio"
              checked
            />

            <div class="selector">
              <label for="happy-radio" class="happy-card">
                <h1 class="fa fa-check">How it works</h1>

                <li>Consider comparing the cost of two countries</li>
                <li>Choose an Origin City and a desired City</li>
                <li>
                  The country will be selected automatically according to the
                  city chosen
                </li>
                <li>Choose the package that suits your lifestyle</li>
                <li>Ask for The Real Bill</li>

                <p>
                  * Information was collected from
                  <a href="https://www.numbeo.com/cost-of-living/"> Numbeo </a>
                </p>
              </label>

              <label for="lovers-radio" class="lovers-card">
                <h1 class="fa fa-search">About</h1>

                <li>Purchasing Power Parity</li>
                <li>Living Cost Index - similar to Big Mac Index</li>
                <li>Living costs in more than 16.000 cities</li>
                <li>Hourly and daily wages in the city you selected </li>
                <li>
                  Check how much hours and/or days to have access to the package
                  selected
                </li>

                <p>*Calculation is according to the minimum wage</p>
              </label>

              <label for="happy-radio" class="happy-pick">
                How!
              </label>
              <label for="lovers-radio" class="lovers-pick">
                Info
              </label>
              <Link
                class="start"
                activeclassname="active"
                to="livingindex"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/livingindex");
                }}
              >
                Let's start
              </Link>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
