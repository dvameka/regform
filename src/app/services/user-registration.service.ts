import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

import { RegistrationUser } from '../shared/registration-user';
import { ProductReview } from '../shared/product-review';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserRegistrationService {
  private userAPIURL = `${environment.backendApiURL}/api/user/` 
  private productAPIURL = `${environment.backendApiURL}/api/product/` 
  
  constructor(private httpClient: HttpClient) { }


  public saveUserRegistration(user: RegistrationUser) : Observable<RegistrationUser>{
    return this.httpClient.post<RegistrationUser>(this.userAPIURL + 'register', user, httpOptions);
  }


  public getAllReviews(){
    return this.httpClient.get<ProductReview[]>(this.productAPIURL + 'reviews', httpOptions);

  }
}
