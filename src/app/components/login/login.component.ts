import { Component } from '@angular/core';

import { UsersService } from '../../services/users/users.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private userService: UsersService) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ]),
    });
  }
  onSubmit() {
    const emailControl = this.myForm.get('email');
    const passwordControl = this.myForm.get('password');
    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;

      this.userService.login(email, password);
    }
  }
}
