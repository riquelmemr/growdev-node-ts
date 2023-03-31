import products from "./database";
import { createProduct, deleteProduct } from "./features/products";

createProduct({
  id: "4234234234",
  name: "Teclado Redragon",
  price: 189.90,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Novos"],
  },
  gender: "Eletrônicos"
})

createProduct({
  id: "43546456474",
  name: "Monitor Acer",
  price: 499.90,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Black Friday"],
  },
  gender: "Eletrônicos"
})

createProduct({
  id: "67596858758",
  name: "Mouse Tech",
  price: 150.90,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Usados"],
  },
  gender: "Eletrônicos"
})

createProduct({
  id: "324234234234",
  name: "Fone Tech",
  price: 70.90,
  quantity: 1,
  category: {
    name: "Periféricos",
    tags: ["Usados"],
  },
  gender: "Eletrônicos"
})


deleteProduct("324234234234")



