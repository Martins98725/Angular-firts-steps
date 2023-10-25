import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-reed',
  templateUrl: './product-reed.component.html',
  styleUrls: ['./product-reed.component.css']
})
export class ProductReedComponent implements OnInit {
  public products: Array<Product> = []
  displayedColumns = ['id', 'name', 'price', 'action'];
  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
  public deleteProduct(productId: number) {
    this.productService.delete(productId).subscribe(() => {
      this.productService.showMenssage("produto excluido");
      this.products = this.products.filter(e => e.id !== productId);
      this.router.navigate(['/products'])
    })
  }
}
