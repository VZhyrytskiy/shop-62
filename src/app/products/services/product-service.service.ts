import { Injectable } from '@angular/core';
import { ProductsConfig } from '../config/products.config';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = ProductsConfig;  // название как-то не очень соответствует данным, можеь быть ProductsData
  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
