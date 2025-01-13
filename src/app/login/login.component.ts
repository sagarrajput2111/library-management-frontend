import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginCreds } from './models/login.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  userCred!:LoginCreds;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]

    })
  }

  onSubmit()
  {
    this.userCred=this.loginForm.value;
    console.log(typeof(this.loginForm.value));
    console.log(this.userCred)
  }

}
