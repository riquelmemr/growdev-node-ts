import products from "../../../database";


function listByCategory(category: string) {
  const filteredProducts = products.filter((product) =>
    product.category.name === category
  );

  if (filteredProducts.length <= 0) {
    console.log("Not found products in database");
      return;
  }

  filteredProducts.forEach((product) => {
    console.log(`Name: ${product.name} | Stock: ${product.quantity}`);
  })
}

export default listByCategory;