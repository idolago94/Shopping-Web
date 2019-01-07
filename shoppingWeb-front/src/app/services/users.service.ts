import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  url:string = 'http://localhost:3000/users';
  
  currentUser:any;

  constructor( private http:HttpClient ) { }


  getAll():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  getById(id):Observable<any> {
    return <Observable<any>> this.http.get(this.url+'/'+id);
  }

  addUser(newUser):Observable<any> {
    return <Observable<any>> this.http.post( this.url, newUser, this.httpOptions );
  }

  login(logindetails): Observable<any> {
    return <Observable<any>> this.http.post( this.url+'/login', logindetails, this.httpOptions );
  }

  logout(): Observable<any> {
    this.currentUser = null;
    return <Observable<any>> this.http.get( this.url+'/logout' );
  }

}
