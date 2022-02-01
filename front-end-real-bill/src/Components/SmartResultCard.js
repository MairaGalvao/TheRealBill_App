import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCityPrices, fetchPackages } from "../actions/actions";
import {
  getSumPricesOrigin,
  getSumPricesDesired,
  getSalaryDesiredDays,
  getSalaryOriginDays,
  getSalaryOriginHours,
  getSalaryDesiredHours,
  getRealBillDaysOrigin,
  getRealBillDaysDesired,
  getRealBillHoursOrigin,
  getRealBillHoursDesired,
  getPackageItems,
  getCountryCityNameOrigin,
  getCountryCityNameDesired,
  getOriginCurrency,
  getDesiredCurrency,
  getPackageChosenName,
  getOriginPrices,
  getDesiredPrices,
  loader,
} from "../Selector/selector";
import { DummyResultCard } from "./DummyResultCard";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

export default function SmartResultCard() {
  const dispatch = useDispatch();
  let location = useLocation();
  const valueOrigCity = new URLSearchParams(location.search).get("oCity");
  const valueOrigCountry = new URLSearchParams(location.search).get("oCountry");
  const valueDesCity = new URLSearchParams(location.search).get("dCity");
  const valueDesCountry = new URLSearchParams(location.search).get("dCountry");
  const didGetItemsPackage = useSelector(getPackageItems);
  // the parameter is the function created and imported from selector.js
  // the state from the store comes automattically using useSelector, in the function
  // created in the selector it returns the state with the package updating the store-redux

  useEffect(() => {
    if (didGetItemsPackage) {
      dispatch(
        fetchCityPrices(
          valueOrigCity,
          valueOrigCountry,
          valueDesCity,
          valueDesCountry
        )
      );
    } else {
      dispatch({ type: "fetchCityPricesStarted" });
      dispatch(fetchPackages());
    }
  }, [
    dispatch,
    valueOrigCity,
    valueOrigCountry,
    valueDesCity,
    valueDesCountry,
    didGetItemsPackage,
  ]);
  const sumOriginPrices = useSelector(getSumPricesOrigin);
  const sumDesiredPrices = useSelector(getSumPricesDesired);
  const salaryOriginDays = useSelector(getSalaryOriginDays);
  const salaryDesiredDays = useSelector(getSalaryDesiredDays);
  const salaryOriginHours = useSelector(getSalaryOriginHours);
  const salaryDesiredHours = useSelector(getSalaryDesiredHours);
  const realBillOriginDays = useSelector(getRealBillDaysOrigin);
  const realBillOriginHours = useSelector(getRealBillHoursOrigin);
  const realBillDesiredDays = useSelector(getRealBillDaysDesired);
  const realBillDesiredHours = useSelector(getRealBillHoursDesired);
  const countryCityNameOrigin = useSelector(getCountryCityNameOrigin);
  const countryCityNameDesired = useSelector(getCountryCityNameDesired);
  const originCurrency = useSelector(getOriginCurrency);
  const desiredCurrency = useSelector(getDesiredCurrency);
  const packageChosenName = useSelector(getPackageChosenName);
  const isLoaderOn = useSelector(loader);
  console.log(isLoaderOn);
  let history = useHistory();

  return (
    <>
      {/* {isLoaderOn && <FullPageLoader />} */}
      {!isLoaderOn && (
        <>
          <Box className="resultsMain">
            <DummyResultCard
              location={countryCityNameOrigin}
              lifestyleLevel={packageChosenName}
              lifestyleCost={sumOriginPrices}
              currency={originCurrency}
              salaryPerDay={salaryOriginDays}
              salaryPerHour={salaryOriginHours}
              daysRequired={realBillOriginDays}
              hoursRequired={realBillOriginHours}
            />
            <DummyResultCard
              location={countryCityNameDesired}
              lifestyleLevel={packageChosenName}
              lifestyleCost={sumDesiredPrices}
              currency={desiredCurrency}
              salaryPerDay={salaryDesiredDays}
              salaryPerHour={salaryDesiredHours}
              daysRequired={realBillDesiredDays}
              hoursRequired={realBillDesiredHours}
            />
          </Box>

          <Button
            style={{
              height: "30px",
              width: "auto",
              color: "#cce0a4",
              backgroundColor: "#0cc0a4",
              fontSize: "1.0rem",
              fontFamily: "Montserrat",
            }}
            onClick={() => {
              history.push(`/`);
            }}
          >
            {" "}
            Back{" "}
          </Button>
        </>
      )}
    </>
  );
}
