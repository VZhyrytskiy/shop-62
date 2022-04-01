import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NoopAnimationsModule
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
