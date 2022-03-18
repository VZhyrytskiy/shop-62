import { ProductModel } from '../models/product.model';

export enum ProductPaths {
    imagePath = '../assets/product/woocommerce-placeholder.png'
}

export const ProductsConfig: ProductModel[] = [
  {
    id: 0,
    title: 'Product 0',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
  },
  {
    id: 1,
    title: 'Product 1',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
  },
  {
    id: 2,
    title: 'Product 2',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
  },
  {
    id: 3,
    title: 'Product 3',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
  },
];
