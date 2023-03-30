import { products } from "../../database";
import { Product } from "../../entities/product.entity";

function createProduct(product: Product) {
  products.push(product);
}

export default createProduct;
