import products from "../../database";
import { Product } from "../../types/product";

function createProduct(product: Product) {
  const productFound = products.find((item) => item.name === product.name);

  if (productFound) {
    console.log("Product found: " + product.name);
  } else {
    products.push(product);
  }
}

export default createProduct;
