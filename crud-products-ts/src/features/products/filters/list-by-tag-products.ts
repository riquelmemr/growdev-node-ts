import products from "../../../database";
import { Tag } from "../../../types/product";


function listByTag(tag: Tag) {
  const filteredProducts = products.filter((product) =>
    product.category.tags.includes(tag)
  );

  if (filteredProducts.length <= 0) {
    console.log("Not found products in database");
    return;
  }

  let stockSum = 0;
  filteredProducts.forEach((product) => {
    console.log(`Name: ${product.name} | Stock: ${product.quantity}`);
    stockSum += product.quantity;
  });

  console.log(`Stock total: ${stockSum}`);
}

export default listByTag;
