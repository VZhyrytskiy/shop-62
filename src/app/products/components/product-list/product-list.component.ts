import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart-service.service';
import { ProductAvailableModel, ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/product-service.service';

@Component({
  selector: 'shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: ProductAvailableModel[];

  constructor(private productService: ProductsService, private cart: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(event: ProductAvailableModel) {
    this.cart.addToCart(event)
  } 
}
