import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientService } from '../../services/httpclient/httpclient.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent {
  myForm: FormGroup;

  constructor(
    private httpClient: HttpClientService,
    private userService: UsersService
  ) {
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
