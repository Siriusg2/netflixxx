import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpclient/httpclient.service';
import { User } from 'src/app/interfaces/user';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private httpClient: HttpClientService,
    private state: StateService
  ) {}

  login(email: string, password: string): void {
    const credentials = { email, password };

    this.httpClient.post('users/login', credentials).subscribe(
      (data: any) => {
        const user: User = {
          id: data.id,
          email: data.email,
          dateBorn: data.dateBorn,
          createdDate: data.createdDate,
          modifiedDate: data.modifiedDate,
          createdBy: data.createdBy,
          modifiedBy: data.modifiedBy,
          profiles: data.profiles,
          role: data.role,
          plan: data.plan,
        };
        this.state.setUser(user);
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }

  singup(
    email: string,
    password: string,
    dateBorn: string,
    plan: string,
    role: string
  ) {
    const newUserData = { email, password, dateBorn, plan, role };

    this.httpClient.post('users/login', newUserData).subscribe(
      (data: any) => {
        const user: User = {
          id: data.id,
          email: data.email,
          dateBorn: data.dateBorn,
          createdDate: data.createdDate,
          modifiedDate: data.modifiedDate,
          createdBy: data.createdBy,
          modifiedBy: data.modifiedBy,
          profiles: data.profiles,
          role: data.role,
          plan: data.plan,
        };
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }
}
