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

    try {
      this.httpClient
        .post('users/login', credentials)
        .subscribe((data: any) => {
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
          console.log(this.state.user);
        });
    } catch (error) {
      alert(error);
    }
  }
}
