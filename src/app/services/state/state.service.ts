import { Injectable } from '@angular/core';
import { Content } from '../../interfaces/content';
import { Plan } from '../../interfaces/plan';
import { Profile } from '../../interfaces/profile';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../interfaces/user';
import { Payments } from 'src/app/interfaces/payments';
import { Role } from 'src/app/interfaces/role';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  dataLoadedSubject: Subject<boolean> = new Subject<boolean>();
  dataLoaded: boolean = false;

  planes: Plan[] = [];
  roles: Role[] = [];
  payments: Payments[] = [];
  profiles: Profile[] = [];
  users: User[] = [];
  content: Content[] = [];
  user: User | null = null;
  isloaded: boolean = false;
  constructor() {}

  setUsers(users: User[]): void {
    this.users = users;
    this.isloaded = false;
  }
  setUser(user: User): void {
    this.user = user;
  }
  addUser(user: User): void {
    this.users.push(user);
  }
  deleteUser(user: User): void {
    this.users = this.users.filter((user) => user.id !== user.id);
  }
}
