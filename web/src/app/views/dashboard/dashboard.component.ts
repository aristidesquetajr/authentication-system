import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/Permission';
import { Product } from 'src/app/models/Product';
import { getPermissions } from 'src/app/utils/localStorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private permissions: Permission[] = [];
  hasCreatePermission = false;
  hasDeletePermission = false
  hasEditPermission = false;

  products: Product[] = [
    {
      id: Math.random().toString(36),
      name: 'Cadeira',
      price: 435,
    },
  ];

  ngOnInit(): void {
    this.permissions = getPermissions();
    this.hasCreatePermission = this.permissions[0].checked;
    this.hasDeletePermission = this.permissions[1].checked;
    this.hasEditPermission = this.permissions[2].checked;
  }
}
