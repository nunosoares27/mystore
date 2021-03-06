# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

- Angular SPA, including a products listing, a product detail, a cart, a order and a confirmation page. 
- The order form as validations, to be sure all the fields are correct before submiting.
- The cart page has total for the order, and is updated dynamically if quantities are updated in the cart.
- All submit buttons are disabled until valid inputs are entered.
- An alert is generated when a product is added to the cart.
- Visit Product details page to get product information.
- If the quantity of an item in the cart reaches to 0 it will be removed from the cart. Or if the user clicks on the button to remove the item. User can also remove all the items from the cart by clicking in a button.
- Order confirmation is shown after submitting an order including the fullName and total of the cart. If the user tries to reach this page we sees a message informing that the user has no orders.

## Installation
    - Run `npm install` to install dependencies.
	- Run `ng serve` to start application and navigate to `http://localhost:4200/`.
	- Run `ng build` to build the project. The artifacts will be stored in the `dist/` directory. Use the contents from this directory for deploying the application.

## File structure
	- Components located in the src/app/components folder.
	- Shared components like the navigation located in the src/app/layout folder.
	- Models located in the src/app/models folder.
	- Services located in the src/app/services folder.
	- JSON data file located in the src/assets folder.

## CSS
	- This project is only using vanilla css.

