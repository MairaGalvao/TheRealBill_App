import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { PackageInfo } from "./PackageInfo";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  resetButtonClicked,
  getOriginPrices,
  getDesiredPrices,
} from "../Selector/selector";

import {
  packagePickedLow,
  packagePickedMedium,
  packagePickedHigh,
  nameCityTyped,
} from "../actions/actions";

export function LifestyleLevelMenu() {
  const [packageMenuOpen, setPackageMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        className="package-levels"
        color="primary"
        style={{
          height: "30px",
          width: "auto",
          color: "#cce0a4",
          backgroundColor: "#0cc0a4",
          fontSize: "1.0rem",
          fontFamily: "Montserrat",
        }}
        onClick={(event) => {
          setPackageMenuOpen(true);
          setAnchorEl(event.currentTarget);
        }}
      >
        Packages
      </Button>

      {/* menu */}

      <Menu open={packageMenuOpen} anchorEl={anchorEl}>
        <MenuItem
          className=" "
          onClick={() => {
            dispatch(packagePickedLow());
            setPackageMenuOpen(false);
          }}
        >
          {" "}
          Low{" "}
        </MenuItem>

        <MenuItem
          className="level-medium"
          onClick={() => {
            dispatch(packagePickedMedium());
            setPackageMenuOpen(false);
          }}
        >
          {" "}
          Medium{" "}
        </MenuItem>

        <MenuItem
          className="level-high"
          onClick={() => {
            dispatch(packagePickedHigh());
            setPackageMenuOpen(false);
          }}
        >
          {" "}
          High{" "}
        </MenuItem>
      </Menu>
    </>
  );
}
