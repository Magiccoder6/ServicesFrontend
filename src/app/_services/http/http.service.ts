import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  login(email:string,password:string){
    let url = environment.apiUrl+'authentication/login/'
    return this._http.post(url,{email,password})
  }
}
