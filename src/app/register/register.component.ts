import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../_services/http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpService,private toastr:ToastrService,private router:Router) {
 
   }

  myForm: FormGroup = this.fb.group({
    username:['',[Validators.required,Validators.minLength(6)]],
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    password1:['',[Validators.required]],
    phone:['',[Validators.required]],
  })

  

  
  ngOnInit(): void {
   
  }

  register(){
    if(this.myForm.valid && this.passwordMatch()){
      this.http.register(this.myForm.value).subscribe((data:any)=>{
        this.toastr.success("Registration Complete")
        this.router.navigate(['login'])
        
      },(error:any)=>{
        this.toastr.error("Email Already Exist!!!")
      })
    }
  }

  passwordMatch(){
    let match = (this.myForm.get('password')?.value == this.myForm.get('password1')?.value) && (this.myForm.get('password')?.value.length>=8 && this.myForm.get('password1')?.value.length>=8)
    
    return match
  }

  get username(){
    
    let val = this.myForm.get('username')
    let err = val?.touched && !val.valid
    return err
    
  }
  get name(){
    let val = this.myForm.get('name')
    let err = val?.touched && !val.valid
    return err
  }
  get email(){
    let val = this.myForm.get('email')
    let err = val?.touched && !val.valid
    return err
   
  }
  get phone(){
    let val = this.myForm.get('phone')
    let err = val?.touched && !val.valid
    return err
  
  }
  get password(){
    let val = this.myForm.get('password')
    let err = val?.touched  && this.passwordMatch()==false
    return err
    
  }
  get password1(){
    let val = this.myForm.get('password1')
    let err = val?.touched &&  this.passwordMatch()==false
    return err
    
  }

}
