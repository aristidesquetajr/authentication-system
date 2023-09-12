import { Permission } from './Permission';

export interface User {
  name: string;
  email: string;
  pass: string;
  permissions: Permission[];
}
