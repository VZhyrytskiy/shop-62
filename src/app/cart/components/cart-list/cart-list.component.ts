import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartProduct } from '../../models/cart.model';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'shop-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  productsInCart: CartProduct[] = [];
  cartTotal!:  BehaviorSubject<number>;
  cartSubscription!: Subscription;
  constructor(public cart: CartService) {}

  ngOnInit(): void {
    this.cartTotal = this.cart.totalCost();
    this.cartSubscription = this.cart.productInCart.subscribe(products => {
      this.productsInCart = products;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  trackByItems(index: number, item: any): string {
    return item.product.title;
  }

  itemToDelete(id: number): void {
    this.cart.onDeleteItem(id)
  }
}
