import { Injectable } from '@angular/core';
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  orders: Order = new Order();

  getOrder(): Order {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders = order;
  }

  clearOrder(): void {
    this.orders = new Order();
  }
}
