import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;
  order: Order = new Order();

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.cartSum();
  }

  cartSum(): void {
    let total: number = 0;
    this.items.forEach((x) => (total += x.product.price * x.quantity));
    this.total = total.toFixed(2) as unknown as number;
  }

  onChange(cartItem: CartItem): void {
    if (cartItem.quantity <= 0) {
      alert(`Item Removed from Cart`);
      this.items = this.cartService.removeFromCart(cartItem);
      this.cartSum();
    } else {
      this.cartSum();
    }
  }

  removeItemFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
    this.items = this.cartService.getCart();
  }

  cleanCart(): void {
    this.cartService.clearCart();
    this.items = this.cartService.getCart();
  }

  onSubmit(fullName: string, address: string, creditCard: string, items: CartItem[], total: number): void {
    this.order = { fullName: fullName, address: address, creditCard: creditCard, total: total, cart: items };
    this.orderService.addOrder(this.order);
    this.cartService.clearCart();
    this.router.navigate(['/confirmation']);
  }
}
