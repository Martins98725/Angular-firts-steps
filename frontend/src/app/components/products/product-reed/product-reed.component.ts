import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-reed',
  templateUrl: './product-reed.component.html',
  styleUrls: ['./product-reed.component.css']
})
export class ProductReedComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];


  constructor(private productService: ProductService, private route: Route, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
  // deleteProduct(): void {
  //   this.productService.delete(this.products).subscribe(() => {
  //     this.productService.showMenssage("produto excluido")
  //     this.router.navigate(['/products'])
  //   })
  // }

}
