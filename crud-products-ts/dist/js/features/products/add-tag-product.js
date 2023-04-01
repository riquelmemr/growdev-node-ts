"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function addTag(id, tag) {
    const product = database_1.default.find((product) => product.id === id);
    if (!product) {
        console.log("Not found product in database.");
        return;
    }
    if (product.category.tags.includes(tag)) {
        console.log("Product already has this tag.");
        return;
    }
    product.category.tags.push(tag);
}
exports.default = addTag;
