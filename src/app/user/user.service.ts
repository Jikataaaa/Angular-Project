import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user : null | undefined = undefined;

  constructor() { }

  get isLoged(){
    return this.user;
  }
}
