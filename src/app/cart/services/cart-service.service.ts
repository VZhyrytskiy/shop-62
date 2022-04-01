import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ProductAvailableModel } from 'src/app/products/models/product.model';
import { CartProduct } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productInCart: BehaviorSubject<Array<CartProduct>> = new BehaviorSubject<
    Array<CartProduct>
  >([]);
  totalCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalSum: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addToCart(product: ProductAvailableModel) {
    const existingProduct = this.productInCart.value.find(
      (el) => el.product.id == product.id
    );
    if (!existingProduct) {
      this.productInCart.next([
        ...this.productInCart.value,
        { product, num: 1 },
      ]);
    } else {
      existingProduct.num += 1;
    }

    let itemsInCart = this.productInCart.value.reduce((acc, item) => {
      return (acc += item.num);
    }, 0);

    this.totalCount.next(itemsInCart);

    let itemsInCartCost = this.productInCart.value.reduce((acc, item) => {
      return (acc += item.num * item.product.price);
    }, 0);

    this.totalSum.next(itemsInCartCost);
  }

  totalCost(): BehaviorSubject<number> {
    return this.totalSum;
  }

  totalQuantity(): BehaviorSubject<number> {
    return this.totalCount;
  }

  onQuantityIncrease(id: number): void {
    const productToIncrease = this.productInCart.value.find(
      (el) => el.product.id == id
    );

    productToIncrease!.num += 1;
    this.updateItemsCount();
    this.updateItemsCost();
  }

  onQuantityDecrease(id: number): void {
    const productToDecrase = this.productInCart.value.find(
      (el) => el.product.id == id
    );
    if (productToDecrase!.num > 1) {
      productToDecrase!.num -= 1;
      this.updateItemsCount();
      this.updateItemsCost();
    }
  }

  updateItemsCount(): void {
    let itemsInCart = this.productInCart.value.reduce((acc, item) => {
      return (acc += item.num);
    }, 0);

    this.totalCount.next(itemsInCart);
  }

  updateItemsCost(): void {
    let itemsInCartCost = this.productInCart.value.reduce((acc, item) => {
      return (acc += item.num * item.product.price);
    }, 0);

    this.totalSum.next(itemsInCartCost);
  }

  onDeleteItem(id: number): void {
    let updatedItems = this.productInCart.value.filter(({product}) => product.id !== id)
    this.productInCart.next(updatedItems);
    this.updateItemsCount();
    this.updateItemsCost();
  }
}
