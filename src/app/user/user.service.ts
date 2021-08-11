import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
//import { tap } from 'rxjs/operators';
import { LocalStorage } from '../core/token';
import { IPost } from '../shared/interfaces/post';
import { User } from '../shared/interfaces/user';

@Injectable()
export class UserService {


  get isLoged(): boolean{
    return this.localStorage.length > 0 ? true : false;
  }

  constructor(private http: HttpClient, @Inject (LocalStorage) private localStorage: Window['localStorage']) { }

  login(data :{username: string, password: string}){
    this.localStorage.setItem('user', JSON.stringify(data))
   return this.http.post<User>('http://localhost:3000/user', data, { withCredentials: true });
    
  }

  register(data: {username: string, password: string}){
    this.localStorage.setItem('user', JSON.stringify(data))
   return this.http.post<User>('http://localhost:3000/user', data, { withCredentials: true });
  }
  
  logout(){
    this.localStorage.removeItem('user')
    return this.http.delete<User>('http://localhost:3000/user/1');
  }
  getProfileData(){
    const data = this.localStorage.getItem('user');
    if(data){
      return JSON.parse(data);
    }
  }
  getPostsByName(name: string){
    return this.http.get<IPost[]>(`http://localhost:3000/posts?author=${name}`);
  }
}


