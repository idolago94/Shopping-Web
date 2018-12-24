import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/products';

  constructor( private http:HttpClient ) { }
  
  getAll():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  getById(id):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/'+id);
  }

  getByCategoryId(categoryID):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/bycategory/'+categoryID);
  }

  addProduct(newProduct):Observable<any> {
    return <Observable<any>> this.http.post( this.url, newProduct, this.httpOptions );
  }

  updateProduct(cartID, updatedProduct):Observable<any> {
    return <Observable<any>> this.http.put(this.url+'/'+cartID, updatedProduct, this.httpOptions);
  }

  deleteProduct(id):Observable<any> {
    return <Observable<any>> this.http.delete(this.url+'/'+id);
  }

}
