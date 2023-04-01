"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function updateProduct(id, updateProduct) {
    const product = database_1.default.findIndex((product) => product.id === id);
    if (product === -1) {
        console.log("Product not found");
        return;
    }
    database_1.default[product] = Object.assign(Object.assign({}, database_1.default[product]), updateProduct);
}
exports.default = updateProduct;
