import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../shared/interfaces/user';

@Injectable()
export class UserService {

  private user : User | null | undefined = undefined;

  constructor(private http: HttpClient) { }

  get isLoged(): boolean{
    return !!this.user;
  }
  login(data :{username: string, password: string}){
   return this.http.post<User>('http://localhost:3000/userLogin', data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }
  logout(){
    return this.http.delete<User>('http://localhost:3000/userLogin/1').pipe(tap(() => this.user = null));
  }
}


