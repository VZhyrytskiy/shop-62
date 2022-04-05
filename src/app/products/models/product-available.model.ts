import { ProductModel } from './product.model';

export interface ProductAvailableModel extends ProductModel {
  isAvailable: boolean;
}
