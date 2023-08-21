import { Component } from '@angular/core';
import { ProdServService } from '../services/prod-serv.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    constructor(private serv: ProdServService){}

    ngOnInit(){
      this.getProductDetails()
    }

    ProductDetails:any
    getProductDetails(){
      this.serv.getProduct().subscribe((data:any)=>{
        this.ProductDetails = data.items
        console.log(data)
      })
    }
}
