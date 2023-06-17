import { Injectable } from '@angular/core';
import { Content } from '../../interfaces/content';
import { Plan } from '../../interfaces/plan';
import { Profile } from '../../interfaces/profile';

import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  planes: Plan[] = [];
  profiles: Profile[] = [];
  users: User[] = [];
  content: Content[] = [];
  user: User | null = null;
  constructor() {}

  setUsers(users: User[]): void {
    this.users = users;
  }
}
