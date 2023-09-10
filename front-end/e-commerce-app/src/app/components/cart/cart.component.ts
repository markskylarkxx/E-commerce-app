import { Component } from '@angular/core';
import{OnInit}from '@angular/core'
import { Product } from 'src/app/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
 public product:any=[];
public grandTotal :number;
  constructor(private cartService: CartService){}
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res =>{
      this.product = res;
     this.grandTotal = this.cartService.getTotalPrice();
    })
    
  }
        // remove item
       removeItem(item:any){
       this.cartService.removeCartItem(item);
  }
        //remove all items
       emptyCart(){
      this.cartService.removeAllCart();
     }
}
