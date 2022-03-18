import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductPaths } from '../../config/products.config';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  text = 'Buy';
  path = ProductPaths;

  ngOnInit(): void {
  }

  onAddToCart(): void {
    console.log('Product has been buyed')
  }
}
