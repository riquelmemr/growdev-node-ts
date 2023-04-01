"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const products_1 = require("./features/products");
// Creates
(0, products_1.createProduct)({
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
(0, products_1.createProduct)({
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
(0, products_1.createProduct)({
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
(0, products_1.createProduct)({
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
(0, products_1.deleteProduct)("324234234234");
// Update
(0, products_1.updateProduct)("4234234234", {
    name: "Teclado Redragon Editado",
    quantity: 1000
});
// List
console.log(database_1.default);
// List All Products
console.log('--------- List All Products ---------');
(0, products_1.listProducts)();
console.log();
// List By Tag
console.log('--------- List By Tag ---------');
(0, products_1.listByTag)("Usados");
console.log();
// List By Category
console.log('--------- List By Category ---------');
(0, products_1.listByCategory)("Periféricos");
console.log();
// List By Price
console.log('--------- List By Price ---------');
(0, products_1.listByPrices)(100, 200);
console.log();
// Add Tag
console.log('--------- Add Tag ---------');
(0, products_1.addTag)("4234234234", "Black Friday");
(0, products_1.listById)("4234234234");
