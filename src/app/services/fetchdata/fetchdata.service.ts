import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpclient/httpclient.service';
import { User } from 'src/app/interfaces/user';
import { StateService } from '../state/state.service';
import { catchError, forkJoin, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchdataService {
  constructor(private http: HttpClientService, private state: StateService) {}

  fetchData(): void {
    const plansRequest = this.http.get('plan/all');
    const usersRequest = this.http.get('users/all');
    const rolesRequest = this.http.get('roles/all');
    const paymentsRequest = this.http.get('payments/all');
    const profilesRequest = this.http.get('profile/all');

    forkJoin({
      plans: plansRequest,
      users: usersRequest,
      roles: rolesRequest,
      payments: paymentsRequest,
      profiles: profilesRequest,
    })
      .pipe(
        catchError((error) => {
          alert(error.error.message);
          return throwError(error);
        })
      )
      .subscribe((response: any) => {
        const plansData = response.plans;
        const usersData = response.users;
        const rolesData = response.roles;
        const paymentsData = response.payments;
        const profilesData = response.profiles;

        this.state.users = usersData;
        this.state.planes = plansData;
        this.state.roles = rolesData;
        this.state.payments = paymentsData;
        this.state.profiles = profilesData;
      });
  }
}
