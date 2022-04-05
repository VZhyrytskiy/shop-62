import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../models/cart.model';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'shop-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  disabled!: boolean;

  @Input() item!: CartProduct;

  @Output() itemsCountIncrease = new EventEmitter<number>();
  @Output() itemsCountDecrease = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor(private cart: CartService) {}

  increase(id: number): void {
    this.cart.onQuantityIncrease(id);
    // куда уходят эти аутпуты?
    this.itemsCountIncrease.emit(1);
  }

  decrease(id: number): void {
    this.cart.onQuantityDecrease(id);
    // куда уходят эти аутпуты?
    // думаю, что логичнее былобы отправлять эти аутпуты родителю,
    // и уже там вызывать сервис, он там и так внедряется, а тут можно избавится от сервиса
    this.itemsCountDecrease.emit(1);
  }

  deleteItem(id: number): void {
    this.delete.emit(id);
  }
}
