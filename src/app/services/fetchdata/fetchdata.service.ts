import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpclient/httpclient.service';
import { User } from 'src/app/interfaces/user';
import { StateService } from '../state/state.service';
import { catchError, forkJoin, map, Observable, throwError } from 'rxjs';
import { PlansService } from '../plans/plans.service';
import { Role } from 'src/app/interfaces/role';
import { Payments } from 'src/app/interfaces/payments';
import { Plan } from 'src/app/interfaces/plan';

@Injectable({
  providedIn: 'root',
})
export class FetchdataService {
  constructor(private http: HttpClientService, private state: StateService) {}

  fetchData(): Observable<any> {
    const plansRequest = this.http.get('plan/all');
    const usersRequest = this.http.get('users/all');
    const rolesRequest = this.http.get('roles/all');
    const paymentsRequest = this.http.get('payments/all');
    const profilesRequest = this.http.get('profile/all');

    return forkJoin([
      plansRequest,
      usersRequest,
      rolesRequest,
      paymentsRequest,
      profilesRequest,
    ]).pipe(
      map(
        ([
          plansResponse,
          usersResponse,
          rolesResponse,
          paymentsResponse,
          profilesResponse,
        ]) => {
          const plansData: any = plansResponse;
          const usersData: any = usersResponse;
          const rolesData: any = rolesResponse;
          const paymentsData: any = paymentsResponse;
          const profilesData: any = profilesResponse;

          this.state.users = usersData;
          this.state.planes = plansData;
          this.state.roles = rolesData;
          this.state.payments = paymentsData;
          this.state.profiles = profilesData;

          return {
            plansData,
            usersData,
            rolesData,
            paymentsData,
            profilesData,
          };
        }
      ),
      catchError((error) => {
        alert(error.error.message);
        return throwError(error);
      })
    );
  }
}
