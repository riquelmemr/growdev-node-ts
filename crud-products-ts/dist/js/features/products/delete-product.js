"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function deleteProduct(id) {
    const foundProduct = database_1.default.findIndex((p) => p.id === id);
    if (foundProduct === -1) {
        console.log("Product not found!");
    }
    else {
        database_1.default.splice(foundProduct, 1);
    }
}
exports.default = deleteProduct;
