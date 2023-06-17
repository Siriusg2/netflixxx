import { Content } from './content';
export interface Plan {
  id: number;
  name: string;
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: any;
  content: Content[];
}
