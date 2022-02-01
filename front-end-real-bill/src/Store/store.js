import { createStore, applyMiddleware } from "redux";
import counterReducer from "../Reducers/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const initState = {
  originPrice: null,
  desiredPrice: null,
  packageItemsLow: null,
  packageItemsMedium: null,
  packageItemsHigh: null,
  packageChosen: "low",
  originPriceFilter: false,
  desiredPriceFilter: false,
  loading: false,
};

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

//store of the project
const store = createStore(
  counterReducer,
  initState,
  composeEnhancers(applyMiddleware(thunk))
  // Specify custom devTools options
);

export default store;
