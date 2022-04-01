import { Injectable } from '@angular/core';
import { ProductsData } from '../config/products.config';
import { ProductAvailableModel, ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = ProductsData;
  constructor() { }

  getProducts(): ProductAvailableModel[] {
    return this.products;
  }
}
