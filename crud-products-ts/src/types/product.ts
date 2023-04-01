interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: Category;
  gender: Gender;
}

type UpdateProduct = Omit<Partial<Product>, "id">

interface Category {
  name: string;
  tags: Tag[];
}

type Gender = 'Eletrônicos' | 'Eletrodomésticos' | 'Gamer'

type Tag = 'Black Friday' | 'Novos' | 'Usados'

export { Product, Category, Gender, Tag, UpdateProduct }