import { Component } from '@angular/core';
import { OnInitUser } from './utils/onitUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    OnInitUser();
  }
}
