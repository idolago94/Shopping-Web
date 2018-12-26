import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/categories';

  constructor( private http:HttpClient ) { }

  getAll():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  getById(id):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/'+id);
  }

  addCategory(newCategory):Observable<any> {
    return <Observable<any>> this.http.post( this.url, newCategory, this.httpOptions );
  }

  updateCart(categoryID, updatedCategory):Observable<any> {
    return <Observable<any>> this.http.put(this.url+'/'+categoryID, updatedCategory, this.httpOptions);
  }

  deleteCategory(id):Observable<any> {
    return <Observable<any>> this.http.delete(this.url+'/'+id);
  }
  
}
