"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listProducts() {
    if (database_1.default.length <= 0) {
        console.log("Not found products in database");
        return;
    }
    database_1.default.forEach((product) => {
        console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Stock: ${product.quantity}`);
    });
}
exports.default = listProducts;
