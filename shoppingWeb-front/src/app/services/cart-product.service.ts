import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/cart_products';

  constructor( private http:HttpClient ) { }

  getByCart(cartID):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/bycart/'+cartID);
  }

  addCartProduct(newProduct):Observable<any> {
    return <Observable<any>> this.http.post(this.url, newProduct, this.httpOptions);
  }

  updateCartProduct(id, updatedProduct):Observable<any> {
    return <Observable<any>> this.http.put(this.url+'/'+id, updatedProduct, this.httpOptions);
  }

  deleteCartProduct(id):Observable<any> {
    return <Observable<any>> this.http.delete(this.url+'/'+id);
  }

}
