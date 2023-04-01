import products from "../../database";
import { UpdateProduct } from "../../types/product";

function updateProduct(id: string, updateProduct: UpdateProduct) {
  const product = products.findIndex((product) => product.id === id);

  if (product === -1) {
    console.log("Product not found");
    return;
  }

  products[product] = {
    ...products[product],
    ...updateProduct,
  };
}

export default updateProduct;
