import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {} as Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
        const productId: string = this.route.snapshot.paramMap.get('id') as string;
        this.productService.readById(productId).subscribe(product =>{
          this.product = product;
        })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
