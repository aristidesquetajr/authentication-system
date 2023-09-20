import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PermissionsComponent } from './views/permissions/permissions.component';
import { PermissionGuard } from './guard/permission.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [PermissionGuard],
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
