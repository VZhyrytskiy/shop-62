import { Injectable } from '@angular/core';
import { ProductsData } from '../config/products.config';
import { ProductAvailableModel, ProductModel } from '../models';

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
