import { NUMBEO_ACCESS_KEY } from "../App";
export const fetchCityPrices =
  (
    originCityInput,
    originCountryInput,
    desiredCityInput,
    desiredCountryInput
  ) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.numbeo.com/api/city_prices?api_key=${NUMBEO_ACCESS_KEY}&query=${originCityInput},%20${originCountryInput}`
      );

      const originData = await response.json();
      dispatch({ type: "originPricesFetched", payload: originData });
    } catch (error) {
      dispatch({ type: "originPricesFetchFailed", payload: error });
    }

    try {
      const response = await fetch(
        `https://www.numbeo.com/api/city_prices?api_key=${NUMBEO_ACCESS_KEY}&query=${desiredCityInput},%20${desiredCountryInput}`
      );
      const desiredData = await response.json();
      dispatch({ type: "desiredPricesFetched", payload: desiredData });
    } catch (error) {
      console.log(error);
      dispatch({ type: "desiredPricesFetchFailed", payload: error });
    }
  };

export const fetchPackages = () => async (dispatch) => {
  try {
    const response = await fetch("https://the-real-bill.herokuapp.com/testapi");
    const packageObject = await response.text();
    dispatch({ type: "packageFetched", payload: packageObject });
  } catch (error) {
    console.log(error);
    dispatch({ type: "packageFetchFailed", payload: error });
  }
};
export const packagePickedLow = () => {
  return { type: "packagePicked", payload: "low" };
};

export const packagePickedMedium = () => {
  return { type: "packagePicked", payload: "medium" };
};

export const packagePickedHigh = () => {
  return { type: "packagePicked", payload: "high" };
};

export const loadingShowing = () => {
  return { type: "loadingShow", payload: true };
};
