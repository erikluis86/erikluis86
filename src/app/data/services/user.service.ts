import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = " http://localhost:3000"  

constructor(private http:HttpClient){}

getAllusers(){
  return this.http.get(`${this.API_URI}/users`); 
}

getUser(id:string){
  return this.http.get(`${this.API_URI}/users/${id}`); 
}
 
}
