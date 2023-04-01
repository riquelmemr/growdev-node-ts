"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../database"));
function listByTag(tag) {
    const filteredProducts = database_1.default.filter((product) => product.category.tags.includes(tag));
    if (filteredProducts.length <= 0) {
        console.log("Not found products in database");
        return;
    }
    let stockSum = 0;
    filteredProducts.forEach((product) => {
        console.log(`Name: ${product.name} | Stock: ${product.quantity}`);
        stockSum += product.quantity;
    });
    console.log(`Stock total: ${stockSum}`);
}
exports.default = listByTag;
