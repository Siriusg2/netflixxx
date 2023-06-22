import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  data: any;
  constructor(private http: HttpClient, private state: StateService) {}

  public postPayement(idUser: number): void {
    const body = { idUser: idUser };
    this.http
      .post('http://localhost:5000/payments/save_payment', body)
      .subscribe((response) => {
        this.data = response;
        this.state.setUsers(this.data);
      });
  }
  public getAllPayments(idUser: number): void {
    this.http
      .post('http://localhost:5000/users/all', idUser)
      .subscribe((response) => {
        this.data = response;
        this.state.setUsers(this.data);
        console.log('Datos recibidos', this.state);
      });
  }
}
