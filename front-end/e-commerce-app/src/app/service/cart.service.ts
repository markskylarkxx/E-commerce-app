import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   public cartItemList :any =[];
  //  public productList = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject(Product);
  public search = new BehaviorSubject<any>("");
 
  constructor() { }
  //get product
  getProduct(){
   return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // //add  to cart
  // addToCart(product:any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //    //get the total price 
  //    this.getTotalPrice();
  //    console.log(this.cartItemList);

  // }


  //add  to cart
  addToCart(product:Product){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
     //get the total price 
     this.getTotalPrice();
     console.log(this.cartItemList);

  }
    // get total price
  getTotalPrice():number{
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
return grandTotal;
  }
  // remove cart item
  removeCartItem(product:any){
this.cartItemList.map((a:any, index:any)=>{
  if(product.id ===a.id){
    this.cartItemList.splice(index, 1);
  }
})
   this.productList.next(this.cartItemList);
  }
  // remove all cart items
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
