import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { messages } from '../../utils/messages';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  constructor() {}

  getCart(): CartItem[] {
    return this.items;
  }

  addToCart(cartItem: CartItem): CartItem[] {
    if (this.items.some((item) => item['product']['id'] === cartItem['product']['id'])) {
      alert(messages.itemAlreadyInCart(cartItem.product.name));
    } else {
      alert(messages.itemAddedToCart({ quantity: cartItem.quantity, name: cartItem.product.name }));
      this.items.push(cartItem);
    }
    return this.items;
  }

  removeFromCart(cartItem: CartItem): CartItem[] {
    this.items = this.items.filter((item) => item.product.id != cartItem.product.id);
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
