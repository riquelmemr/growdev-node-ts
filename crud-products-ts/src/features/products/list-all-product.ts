import products from "../../database";

function listProducts() {
  if (products.length <= 0) {
    console.log("Not found products in database");
    return;
  }

  products.forEach((product) => {
    let valueInShop = 0;
    valueInShop = product.price * product.quantity;
    console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Stock: ${product.quantity} | Value In Shop: ${valueInShop}`);
  })
}

export default listProducts;
