import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{
  
  product: Product = {} as Product;
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {
    const productId: string = this.route.snapshot.paramMap.get('id') as string;

    this.productService.readById(productId).subscribe(product => {
        this.product = product;
        console.log(this.product)
     });
  }

  updateProduct(): void{

  }
  cancel(): void{
      this.router.navigate(['/products'])
  }
}
