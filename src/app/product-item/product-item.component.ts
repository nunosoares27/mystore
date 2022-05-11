import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() quantity: number;

  constructor() {
    this.product = new Product();
    this.quantity = 0;
  }

  ngOnInit(): void {}
}
