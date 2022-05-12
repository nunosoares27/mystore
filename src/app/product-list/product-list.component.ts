import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productlist: Product[] = [];

  constructor(private productsService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.productlist = data;
    });
  }

  addToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }
}
