import { NONE_TYPE } from '@angular/compiler';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartService } from 'src/app/cart/services/cart-service.service';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  productCount!: BehaviorSubject<number>;
  @Output() emitSideNav = new EventEmitter<boolean>();
  @ViewChild('header') header!: ElementRef<HTMLElement>;

  @HostListener('window:scroll')
  scrollDown() {
    if (window.pageYOffset >= 120) {
      document.body.classList.add('gap');
      this.header.nativeElement.classList.add('sticky');
    } else {
      this.header.nativeElement.classList.remove('sticky');
      document.body.classList.remove('gap');
    }
  }

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.productCount = this.cart.totalQuantity();
  }

  emitToParent() {
    this.emitSideNav.emit(true);
  }
}
