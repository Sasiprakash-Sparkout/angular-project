import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
LoginForm=new FormGroup({
  Email:new FormControl('',[Validators.required,Validators.email]),
  Password:new FormControl('',[Validators.required,Validators.minLength(4)])
})
onsubmit(){
   
  if (this.LoginForm.invalid) {
  return;
}
  console.log(this.LoginForm.value)
 this.LoginForm.reset()
}
}
