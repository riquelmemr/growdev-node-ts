import products from "../../database";

function listProducts() {
  if (products.length <= 0) {
    console.log("Not found products in database");
    return;
  }

  products.forEach((product) => {
    console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Stock: ${product.quantity}`);
  })
}

export default listProducts;
