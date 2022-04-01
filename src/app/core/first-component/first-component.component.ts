import { Component, OnInit } from '@angular/core';
import { Category } from './first-component.config';

@Component({
  selector: 'shop-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  isAvailable!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
