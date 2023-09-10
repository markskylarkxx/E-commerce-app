import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // inject http client
  constructor(private http: HttpClient) { }

  //create a method for calling api
  // get product;
  getProduct(){
    return this.http.get<any>
    ("http://localhost:8085/api/v1/products").pipe(map((response:any)=>{
      return response;
    }))
  }
}
