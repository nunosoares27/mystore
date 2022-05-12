import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: Order = new Order();

  constructor(private orderService: OrderService, private cartService: CartService) {}

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
  }

  onClick(): void {
    this.orderService.clearOrder();
    this.cartService.clearCart();
    alert('Order & Cart Cleared');
  }
}
