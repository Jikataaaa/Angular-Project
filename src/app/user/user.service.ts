import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user : null | undefined = undefined;

  constructor() { }

  get isLoged(): boolean{
    return !!this.user;
  }
}
