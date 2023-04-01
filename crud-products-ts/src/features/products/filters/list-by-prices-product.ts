import products from "../../../database";


function listByPrices(min: number, max: number) {
  const filteredProducts = products.filter((product) =>
    product.price >= min && product.price <= max
  );

  if (filteredProducts.length <= 0) {
    console.log("Not found products in database");
    return;
  }

  filteredProducts.forEach((product) => {
    console.log(`Name: ${product.name} | Price: ${product.price}`);
  })
}

export default listByPrices;