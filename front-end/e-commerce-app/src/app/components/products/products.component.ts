import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  constructor(private apiService: ApiService, private cartService: CartService){}
  // property to store product list;
   productList : Product[];
   filterCategory :Product[];
   searchKey:string ="";
  
   ngOnInit(): void {
    this.apiService.getProduct()
    .subscribe(response =>{
      this.productList = response;

       this.filterCategory = response;
       this.productList.forEach((a:Product)=>{
        if(a.category ==="Men's Clothing"  || a.category =="Women's Clothing"){
          a.category ='fashion'
        }
        Object.assign(a, {quantity:1, total:a.price})
      })
      console.log(this.productList);
    }) 
    this.cartService.search.subscribe((val:any) =>{
      this.searchKey=val;
    })
  }
  // add to cart;
  addToCart(item:Product){
    this.cartService.addToCart(item);

  }
  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category === category || category ==""){
        return a;
      }
    })
  }

}
