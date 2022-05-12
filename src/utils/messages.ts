export const messages = {
  itemAlreadyInCart: (item: string): string => `${item} is already in cart.`,
  itemAddedToCart: ({ quantity, name }: { quantity: number; name: string }): string => `${quantity} ${name} has been added to the cart!`,
};
