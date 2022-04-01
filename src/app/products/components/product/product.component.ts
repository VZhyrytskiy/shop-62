import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ProductAvailableModel, ProductModel } from '../../models/product.model';
import { ProductPaths } from '../../config/products.config';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductAvailableModel;
  @Output() productToCart = new EventEmitter<ProductAvailableModel>();
  text = 'Buy';
  path = ProductPaths;

  onAddToCart(): void {
    this.productToCart.emit(this.product);
  }
}
