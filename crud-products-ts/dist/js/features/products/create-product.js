"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function createProduct(product) {
    const productFound = database_1.default.find((item) => item.name === product.name);
    if (productFound) {
        console.log("Product found: " + product.name);
    }
    else {
        database_1.default.push(product);
    }
}
exports.default = createProduct;
