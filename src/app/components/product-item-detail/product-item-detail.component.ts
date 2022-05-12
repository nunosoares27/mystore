import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productlist: Product[] = [];
  productId: number = 0;
  product: Product = new Product();
  cartItem: CartItem = new CartItem();

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe((params) => (this.productId = params['id']));
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productlist = data;
      this.product = this.productlist.find((prod) => prod.id == this.productId) as unknown as Product;
    });
  }

  onSubmit(product: Product, quantity: number): void {
    const cartItem: CartItem = { product, quantity };
    this.cartService.addToCart(cartItem);
  }
}
