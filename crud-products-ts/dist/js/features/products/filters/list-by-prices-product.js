"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../database"));
function listByPrices(min, max) {
    const filteredProducts = database_1.default.filter((product) => product.price >= min && product.price <= max);
    if (filteredProducts.length <= 0) {
        console.log("Not found products in database");
        return;
    }
    filteredProducts.forEach((product) => {
        console.log(`Name: ${product.name} | Price: ${product.price}`);
    });
}
exports.default = listByPrices;
