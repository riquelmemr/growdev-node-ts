import products from "./database";
import { addTag, createProduct, deleteProduct, listByCategory, listByPrices, listProducts, updateProduct, listByTag, listById } from "./features/products";

// Creates
createProduct({
  id: "4234234234",
  name: "Teclado Redragon",
  price: 189.9,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Novos"],
  },
  gender: "Eletrônicos",
});

createProduct({
  id: "43546456474",
  name: "Monitor Acer",
  price: 499.9,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Black Friday"],
  },
  gender: "Eletrônicos",
});

createProduct({
  id: "67596858758",
  name: "Mouse Tech",
  price: 150.9,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Usados"],
  },
  gender: "Eletrônicos",
});

createProduct({
  id: "324234234234",
  name: "Fone Tech",
  price: 70.9,
  quantity: 1,
  category: {
    name: "Operativos",
    tags: ["Usados"],
  },
  gender: "Eletrônicos",
});

// Delete
deleteProduct("324234234234");

// Update
updateProduct("4234234234", {
    name: "Teclado Redragon Editado",
    quantity: 1000
})

// List
console.log(products);

// List All Products
console.log('--------- List All Products ---------');
listProducts();
console.log();

// List By Tag
console.log('--------- List By Tag ---------');
listByTag("Usados");
console.log();

// List By Category
console.log('--------- List By Category ---------');
listByCategory("Periféricos");
console.log();

// List By Price
console.log('--------- List By Price ---------');
listByPrices(100, 200);
console.log();

// Add Tag
console.log('--------- Add Tag ---------');
addTag("4234234234", "Black Friday"); 
listById("4234234234");

