import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdServService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get('https://db.ezobooks.in/kappa/image/task')
  }
}
