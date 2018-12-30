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
  
  // after develop delete the init
  currentUser:any = {
    "_id": "5c20cc4abbd37b41617283b6",
    "firstName": "b",
    "lastName": "c",
    "username": "idolago94@gmail.com",
    "id": "312546534",
    "authority": "user",
    "city": "Tel Aviv",
    "adress": "a",
    "__v": 0
};

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
