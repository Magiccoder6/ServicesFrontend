import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) {
 
   }

  myForm: FormGroup = this.fb.group({
    username:['',[Validators.required]],
    fullname:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    password1:['',[Validators.required]],
    phone:['',[Validators.required]],
  })

  

  
  ngOnInit(): void {
   
  }

  get username(){
    let val = this.myForm.get('username')
    let err = val?.touched && !val.valid
    return err
    
  }
  get fullname(){
    let val = this.myForm.get('fullname')
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
    let err = val?.touched && !val.valid
    return err
    
  }
  get password1(){
    let val = this.myForm.get('password1')
    let err = val?.touched && !val.valid
    return err
    
  }

}
