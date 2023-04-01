import products from "../../database";
import { Tag } from "../../types/product";

function addTag(id: string, tag: Tag) {
  const product = products.find((product) => product.id === id);

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

export default addTag;