import { Permission } from '../models/Permission';
import { User } from '../models/User';

export function getUser(): User {
  const user = window.localStorage.getItem('user');

  return user ? JSON.parse(user) : null;
}

export function setUser(user: User) {
  window.localStorage.setItem('user', JSON.stringify(user));
}

export function getPermissions() {
  const { permissions } = getUser();

  return permissions;
}

export function setPermissions(permissions: Permission[]) {
  const user = getUser();

  Object.assign(user, {
    permissions,
  });

  setUser(user);
}
