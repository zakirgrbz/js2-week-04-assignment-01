const getProductsOfNormalQuality = (zArray) => {
  return zArray.filter((product) => product.quality === "Normal");
};

const getProductImageWithPngExtension = (zArray) => {
  return zArray.filter((prod) => prod.productImage.endsWith(".png"));
};


const getCalorieOfTheMostExpensiveProduct = (zArray) => {
  const biggestPrice = Math.max(
    ...zArray.map((pArray) => pArray.price)
  );

  return zArray.find((pArray) => pArray.price === biggestPrice)
    .totalCalories;
}


const sortByExpirationDate = (zArray) => {
  return zArray.sort(
    (a, b) => new Date(a.expireDate) - new Date(b.expireDate)
  );
};


export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
