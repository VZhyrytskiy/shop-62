import { ProductAvailableModel, ProductModel } from '../models';

export enum ProductPaths {
    imagePath = '../assets/product/woocommerce-placeholder.png'
}

export const ProductsData: ProductAvailableModel[] = [
  {
    id: 0,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
    isAvailable: true
  },
  {
    id: 1,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 220,
    isAvailable: true
  },
  {
    id: 2,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
    isAvailable: false
  },
  {
    id: 3,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 180,
    isAvailable: true
  },
  {
    id: 3,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 40,
    isAvailable: true
  },
  {
    id: 4,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 100,
    isAvailable: true
  },
  {
    id: 5,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 150,
    isAvailable: false
  },
  {
    id: 6,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 120,
    isAvailable: true
  },
  {
    id: 7,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 120,
    isAvailable: true
  },
  {
    id: 8,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 50,
    isAvailable: false
  },
  {
    id: 9,
    title: 'Product',
    imageUrl: ProductPaths.imagePath,
    description: 'Some text',
    price: 60,
    isAvailable: true
  },
];
