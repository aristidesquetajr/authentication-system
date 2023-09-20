import { Injectable } from '@angular/core';
import { Permission } from '../models/Permission';
import { getPermissions } from '../utils/localStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private permissions: Permission[] = [];

  constructor() {}

  private updatePermissions() {
    this.permissions = getPermissions();
  }

  hasPermission(permissionLabel: string) {
    this.updatePermissions()

    const permission = this.permissions.find(
      ({ label }) => label == permissionLabel
    );

    if (!permission) {
      throw new Error('Permission not found');
    }

    return permission.checked;
  }
}
