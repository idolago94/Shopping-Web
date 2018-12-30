import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/orders';

  constructor( private http:HttpClient ) { }

  getAll():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  getById(id):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/'+id);
  }

  getByUserId(userID):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/byuser/'+userID);
  }

  addOrder(newOrder):Observable<any> {
    return <Observable<any>> this.http.post( this.url, newOrder, this.httpOptions );
  }

  updateOrder(cartID, updatedOrder):Observable<any> {
    return <Observable<any>> this.http.put(this.url+'/'+cartID, updatedOrder, this.httpOptions);
  }

  deleteOrder(id):Observable<any> {
    return <Observable<any>> this.http.delete(this.url+'/'+id);
  }
  
}
