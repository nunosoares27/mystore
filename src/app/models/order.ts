import { CartItem } from './cartItem';

export class Order {
  fullName: string;
  address: string;
  creditCard: string;
  total: number;
  cart: CartItem[];

  constructor() {
    this.fullName = '';
    this.address = '';
    this.creditCard = '';
    this.total = 0;
    this.cart = [
      {
        product: {
          id: 0,
          name: '',
          price: 0,
          url: '',
          description: '',
        },
        quantity: 0,
      },
    ];
  }
}
