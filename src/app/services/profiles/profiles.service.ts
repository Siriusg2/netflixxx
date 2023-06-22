import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  data: any;
  constructor(private http: HttpClient, private state: StateService) {}

  public fetchData(): void {
    this.http.get('http://localhost:5000/users/all').subscribe((response) => {
      this.data = response;
      this.state.setUsers(this.data);
      console.log('Datos recibidos', this.state);
    });
  }
}
