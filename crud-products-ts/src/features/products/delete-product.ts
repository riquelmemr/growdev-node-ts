import products from "../../database";

function deleteProduct(id: string) {
  const foundProduct = products.findIndex((p) => p.id === id);

  if (foundProduct === -1) {
    console.log("Product not found!");
  } else {
    products.splice(foundProduct, 1);
  }
}

export default deleteProduct;
