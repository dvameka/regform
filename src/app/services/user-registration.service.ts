import { Injectable } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserRegistrationService {
  private userAPIURL = `${environment.backendApiURL}/api/user/` 
  
  constructor(private httpClient: HttpClient) { }


  public saveUserRegistration(user: RegistrationUser) : Observable<RegistrationUser>{
    return this.httpClient.post<RegistrationUser>(this.userAPIURL + 'register', user, httpOptions);
  }
}
