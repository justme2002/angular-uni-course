import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(
    private productService?: ProductService, 
    private router?: Router,
  ) {}

  get Products() {
    return this.productService?.getProducts();
  }

  handleNavigateToProductDetail(id: string, productName: string) {
    this.router?.navigate(['products', id], { state: { productName }, replaceUrl: true })
  }
}
