import products from "../../database";

function listProducts() {

  if (products.length <= 0) {
    console.log("Not found products in database");
    return;  
  }

  const listOrderBy = products.sort((a, b) => a.price - b.price);
  console.log(listOrderBy);
}

export default listProducts;
