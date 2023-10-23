import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-product-reed',
  templateUrl: './product-reed.component.html',
  styleUrls: ['./product-reed.component.css']
})
export class ProductReedComponent implements OnInit {

products: Product[] = [];
displayedColumns = ['id', 'name', 'price', 'action'];


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
    })
  }

}
