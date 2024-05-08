import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';
import { Product, Promotion } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/findAll`);
  }

  getProductPromotions(productId: number): Observable<Promotion> {
    return this.http.get<any>(`${this.baseUrl}/api/findByProductId/${productId}`);
  }

  insertProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/api/insert`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/api/update`, product);
  }
}
