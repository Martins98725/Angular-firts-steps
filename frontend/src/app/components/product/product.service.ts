import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  public showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  // observables (aula 15 )
  public create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  public read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  public readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }


  public update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  public delete(productId: number): Observable<Product> {
    const url = `${this.baseUrl}/${productId}`;
    return this.http.delete<Product>(url, {responseType:'json'});
  }
}
