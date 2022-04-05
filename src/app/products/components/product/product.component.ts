import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductAvailableModel } from '../../models';
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
