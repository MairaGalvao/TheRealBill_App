import { initState } from "../Store/store";
import { getPackageFiltered } from "../Logic/logic";

export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "fetchCityPricesStarted":
      return { ...state, loading: true };

    case "submitBtnClicked":
      return { ...state, submitBtnClicked: true };
    case "resetBtnClicked":
      return { ...state, resetBtnClicked: true };
    case "consoleInputInfo":
      return { ...state, consoleInputInfo: true };
    case "originPricesFetched":
      let chosenPackageOrigin;
      if (state.packageChosen == "low") {
        chosenPackageOrigin = state.packageItemsLow;
      } else if (state.packageChosen == "medium") {
        chosenPackageOrigin = state.packageItemsMedium;
      } else {
        chosenPackageOrigin = state.packageItemsHigh;
      }

      const packageOriginFiltered = getPackageFiltered(
        chosenPackageOrigin,
        action.payload
      );
      return {
        ...state,
        originPrice: action.payload,
        originPriceFilter: packageOriginFiltered,
      };

    case "desiredPricesFetched":
      let chosenPackage;
      if (state.packageChosen == "low") {
        chosenPackage = state.packageItemsLow;
      } else if (state.packageChosen == "medium") {
        chosenPackage = state.packageItemsMedium;
      } else {
        chosenPackage = state.packageItemsHigh;
      }
      console.log(chosenPackage);

      const packageDesiredFiltered = getPackageFiltered(
        chosenPackage,
        action.payload
      );
      return {
        ...state,
        desiredPrice: action.payload,
        desiredPriceFilter: packageDesiredFiltered,
        loading: false,
      };

    case "originPriceFilter":
      return { ...state, originPriceFilter: true };
    case "desiredPriceFilter":
      return { ...state, desiredPriceFilter: true };
    case "packageFetched":
      return {
        ...state,
        packageItemsLow: JSON.parse(action.payload)[0].package3,
        packageItemsMedium: JSON.parse(action.payload)[0].package2,
        packageItemsHigh: JSON.parse(action.payload)[0].package1,
      };

    case "packagePicked":
      return {
        ...state,
        packageChosen: action.payload,
      };

    default:
      return state;
  }
}
