import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() text: string = "";

  constructor(private router: Router) {}

  signOut() {
    window.localStorage.removeItem('user')
    this.router.navigate(['/'])
  }
}
