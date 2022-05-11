import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productlist: Product[] = [];
  productId: number = 0;
  product: Product = new Product();

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.productId = params['id']));
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productlist = data;
      this.product = this.productlist.find((prod) => prod.id == this.productId) as unknown as Product;
    });
  }
}
