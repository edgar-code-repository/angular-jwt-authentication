import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(user: User) {
    if (user.username == "user" && user.password == "pwd") {
      return true;
    }

    return false;
  }

}
