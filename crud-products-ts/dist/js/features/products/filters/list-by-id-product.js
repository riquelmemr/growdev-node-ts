"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../database"));
function listById(id) {
    const product = database_1.default.find((product) => product.id === id);
    if (!product) {
        console.log("Product not found");
        return;
    }
    console.log(product);
}
exports.default = listById;
