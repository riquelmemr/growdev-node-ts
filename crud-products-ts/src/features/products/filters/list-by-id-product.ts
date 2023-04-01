import products from "../../../database";


function listById(id: string) {
  const product = products.find((product) => product.id === id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  console.log(product);
}

export default listById;
