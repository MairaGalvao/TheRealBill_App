import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { PackageInfo } from "./PackageInfo";
import "../css/resultsCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
    maxHeight: 1000,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function DummyResultCard({
  location,
  lifestyleLevel,
  lifestyleCost,
  currency,
  salaryPerDay,
  salaryPerHour,
  daysRequired,
  hoursRequired,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div class="product">
        <div class="header">
          <div class="back"></div>
        </div>
        <div class="main">
          <div class="left">
            <h2>{location}</h2>

            {/* <h3>$320.00</h3> */}
            {/* <img
              src="http://www.design.si.it/wp-content/uploads/2018/02/Sedia-di-design-nordico-legno-polipropilene-e-cuscino-grigio.png"
              alt=""
            /> */}

            <div class="footer">
              <div class="left">
                <h4> Total Cost: </h4>
                <p id="price">
                  {currency} {lifestyleCost}
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy f
            </p>
            <p>
              Lifestyle level: <a href="">{lifestyleLevel}</a>
            </p>
            <p class="quantity">
              Daily Wage <span class="fa fa-angle-left angle"></span>
              <span id="qt"> {salaryPerDay} </span>
              <span class="fa fa-angle-right angle"></span>
            </p>
            <p class="quantity">
              Days required<span class="fa fa-angle-left angle"></span>
              <span id="qt">{daysRequired}</span>
              <span class="fa fa-angle-right angle"></span>
            </p>
            <div class="right" style={{ cursor: "pointer" }}>
              <p>Save info</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
