import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartConfig } from './config/cart.config';

@Component({
  selector: 'shop-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products = CartConfig;
  
  constructor() { }

  ngOnInit(): void {
  }

  trackByItems(index: number, product: ProductModel): number { return product.id; }

}
