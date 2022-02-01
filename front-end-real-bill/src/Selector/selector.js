export const resetButtonClicked = (state) => state.resetBtnClicked;
export const getOriginPrices = (state) => {
  return state.originPriceFilter;
};
export const getDesiredPrices = (state) => {
  return state.desiredPriceFilter;
};

export const getPackageItems = (state) => {
  return state.packageItemsLow;
};

export const getSumPricesOrigin = (state) => {
  if (state.originPriceFilter !== null) {
    let sum = 0;
    for (let i = 0; i < state.originPriceFilter.length; i++) {
      sum += state.originPriceFilter[i].average_price;
    }
    return Math.floor(sum * 100) / 100;
  }
};

export const getSumPricesDesired = (state) => {
  if (state.desiredPriceFilter !== null) {
    let sum = 0;
    for (let i = 0; i < state.desiredPriceFilter.length; i++) {
      sum += state.desiredPriceFilter[i].average_price;
    }
    return Math.floor(sum * 100) / 100;
  }
};

export const getSalaryOriginDays = (state) => {
  if (state.originPrice !== null) {
    return (
      Math.floor((state.originPrice.prices[40].average_price / 30) * 100) / 100
    );
  }
};

export const getSalaryDesiredDays = (state) => {
  if (state.desiredPrice !== null) {
    return (
      Math.floor((state.desiredPrice.prices[40].average_price / 30) * 100) / 100
    );
  }
};

export const getSalaryOriginHours = (state) => {
  if (state.originPrice !== null) {
    return (
      Math.floor((state.originPrice.prices[40].average_price / 176) * 100) / 100
    );
  }
};

export const getSalaryDesiredHours = (state) => {
  if (state.desiredPrice !== null) {
    return (
      Math.floor((state.desiredPrice.prices[40].average_price / 176) * 100) /
      100
    );
  }
};

export const getRealBillDaysOrigin = (state) => {
  const oSum = getSumPricesOrigin(state);
  const oSalaryDays = getSalaryOriginDays(state);
  return Math.floor(oSum / oSalaryDays);
};

export const getRealBillHoursOrigin = (state) => {
  const oSum = getSumPricesOrigin(state);
  const oSalaryHours = getSalaryOriginHours(state);

  return Math.floor(oSum / oSalaryHours);
};

export const getRealBillDaysDesired = (state) => {
  const dSum = getSumPricesDesired(state);
  const dSalaryDays = getSalaryDesiredDays(state);
  return Math.floor(dSum / dSalaryDays);
};

export const getRealBillHoursDesired = (state) => {
  const dSum = getSumPricesDesired(state);
  const dSalaryHours = getSalaryDesiredHours(state);

  return Math.floor(dSum / dSalaryHours);
};

export const getCountryCityNameOrigin = (state) => {
  return state.originPrice ? state.originPrice.name : null;
};

export const getCountryCityNameDesired = (state) => {
  return state.desiredPrice ? state.desiredPrice.name : null;
};

export const getOriginCurrency = (state) => {
  return state.originPrice ? state.originPrice.currency : null;
};

export const getDesiredCurrency = (state) => {
  return state.desiredPrice ? state.desiredPrice.currency : null;
};

export const getPackageChosenName = (state) => {
  return state.packageChosen ? state.packageChosen : null;
};

export const loader = (state) => {
  return state.loading;
};
