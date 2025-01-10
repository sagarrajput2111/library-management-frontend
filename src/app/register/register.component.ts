import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDetail } from './models/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  userDetail!: UserDetail;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      firstName: ['', Validators.maxLength(15)],
      lastName: ['', Validators.maxLength(15)],
      occupation: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]

    })
  }
  onSubmit() {
    this.userDetail = this.registerForm.value;
    console.log(this.userDetail);
  }

}
