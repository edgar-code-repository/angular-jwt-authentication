import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl: string = environment.LOGIN_API_URL;

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };   

  constructor(private httpClient: HttpClient) { }

  authenticate(user: User): Observable<any> {
    let observable = this.httpClient.post(this.loginUrl, user, this.httpOptions);
    return observable;
  }

}
