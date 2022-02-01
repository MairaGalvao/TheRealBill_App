export const getPackageFiltered = (packageItems, apiItems) => {
  const packageResults = [];
  for (var i = 0; i < packageItems.length; i++) {
    for (var j = 0; j < apiItems.prices.length; j++) {
      if (packageItems[i] === apiItems.prices[j].item_name) {
        packageResults.push(apiItems.prices[j]);
      }
    }
  }
  console.log(packageResults);
  return packageResults;
};
