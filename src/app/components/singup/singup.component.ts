import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  myForm: FormGroup;
  plans: any;

  dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  constructor(private userService: UsersService, private state: StateService) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ]),
      dateBorn: new FormControl('', [
        Validators.required,
        Validators.pattern(this.dateRegex),
      ]),
      role: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.state.dataLoadedSubject.subscribe((loaded) => {
      if (loaded) {
        this.plans = this.state.planes;
        // Aquí puedes realizar cualquier acción necesaria con los datos cargados
      }
    });
  }

  loadData(): void {
    // Acceder a los datos del servicio
    this.plans = this.state.planes;
    // Realizar cualquier otra lógica necesaria con los datos
  }
  onSubmit() {
    const emailControl = this.myForm.get('email');
    const passwordControl = this.myForm.get('password');
    const dateBornControl = this.myForm.get('dateBorn');
    const roleControl = this.myForm.get('role');
    const planControl = this.myForm.get('plan');
    if (
      emailControl &&
      passwordControl &&
      dateBornControl &&
      roleControl &&
      planControl
    ) {
      const email = emailControl.value;
      const password = passwordControl.value;
      const dateBorn = dateBornControl.value;
      const role = roleControl.value;
      const plan = planControl.value;
      this.userService.singup(email, password, dateBorn, plan);
      console.log(email);
      console.log(password);
      console.log(dateBorn);
      console.log(plan);
    }
  }
}
