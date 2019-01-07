import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/carts';

  minimize:boolean = false;

  openCart:any;

  constructor( private http:HttpClient ) { }

  cartNeedToUpdate = new Subject();
  newCartOpened = new Subject();

  getAll():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  getById(id):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/'+id);
  }

  getByUserId(userID):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/byuser/'+userID);
  }

  addCart(newCart):Observable<any> {
    return <Observable<any>> this.http.post( this.url, newCart, this.httpOptions );
  }

  updateCart(cartID, updatedCart):Observable<any> {
    return <Observable<any>> this.http.put(this.url+'/'+cartID, updatedCart, this.httpOptions);
  }

  deleteCart(id):Observable<any> {
    return <Observable<any>> this.http.delete(this.url+'/'+id);
  }

}
