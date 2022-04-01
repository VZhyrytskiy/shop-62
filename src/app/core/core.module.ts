import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartListComponent } from '../cart/components/cart-list/cart-list.component';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SharedModule
  ]
})
export class CoreModule { }
