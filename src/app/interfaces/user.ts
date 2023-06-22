import { Plan } from './plan';
import { Profile } from './profile';
import { Role } from './role';

export interface User {
  id: number;
  email: string;

  dateBorn: string;
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: any;
  profiles: Profile[];
  role: Role;
  plan: Plan;
}
