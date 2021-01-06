import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import{LoginDetail} from './login-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  readonly baseURL ='http://localhost:50471/api/LoginDetails'

  list : LoginDetail[];
  userName: string;
  password: string;
  


  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as LoginDetail[]);
  }
}
