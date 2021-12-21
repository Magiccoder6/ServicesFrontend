import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http/http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpService,private toastr:ToastrService) { }

  EmailError:string=''
  PasswordError:string=''

  public myForm: FormGroup=new FormGroup(
    {
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  );

  ngOnInit(): void {
    

  }

  login(){
    if(this.myForm.valid){
      this._http.login(this.myForm.value.email,this.myForm.value.password).subscribe((data:any)=>{
        console.log(data)
      },(error:any)=>{
        
        this.toastr.error(error.detail)
      })
    }
    
    if(this.myForm.value.email.length==0){
      this.EmailError="Email Required"
      setTimeout(()=>{
        this.EmailError=""
      },2000)
    }
     if(this.myForm.value.password.length==0){
      this.PasswordError='Password Required'
      setTimeout(()=>{
        this.PasswordError=''
      },2000)
    }


  }

}
function next(next: any, arg1: (data: any) => void, arg2: (error: any) => void) {
  throw new Error('Function not implemented.');
}

