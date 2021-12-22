import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js'
import {User} from '../../_models/User'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService
 {
  private _Key: string = '3993-4d72-8283-8f2c353f2a58-7ade05d9-7eab-47ee-9761-7fb70f22df89-74ce7bdc-c34a-4544-94df-b373c3e98d5d';
  user: any;

  constructor(private _http:HttpClient,private router:Router) {
    let temp_user=this.ReadDataFromStorage()
    if(temp_user!=null){
      this.user=temp_user
      console.log(this.user)
    }
  }
  

  login(email:string,password:string){
    let url = environment.apiUrl+'authentication/login/'
    return this._http.post(url,{email,password})
  }

  register(form:any){
    let url = environment.apiUrl+'authentication/register/'
    return this._http.post(url,form)
  }

  storeUser(user:any){
    this.user=user;
    let DString = JSON.stringify(user);
    let EncryptedString = CryptoJS.AES.encrypt(DString, this._Key).toString();
    localStorage.setItem('currentUser', EncryptedString);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.user=null;
    this.router.navigate(['login'])
  }

  ReadDataFromStorage() {

    let EString = localStorage.getItem('currentUser');
    if (EString == null) {
      return null;
    }

    var data = localStorage.getItem('currentUser')
    if (data != null) {
      let DecryptedString = CryptoJS.AES.decrypt(data, this._Key).toString(CryptoJS.enc.Utf8);
     
      return JSON.parse(DecryptedString);
    }

      return null;
    
  }
}
