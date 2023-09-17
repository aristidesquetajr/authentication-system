import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/Permission';
import { getPermissions, setPermissions } from 'src/app/utils/localStorage';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[] = [];

  ngOnInit(): void {
    this.permissions = getPermissions();
  }

  changePermission(label: string, event: Event) {
    const { checked } = event.target as HTMLInputElement;

    const newPermissions = this.permissions.map((permission) => {
      if (permission.label === label) {
        permission.checked = checked;
      }

      return permission;
    });

    setPermissions(newPermissions);
  }
}
