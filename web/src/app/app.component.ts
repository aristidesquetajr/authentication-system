import { Component, OnInit } from '@angular/core';
import { OnInitUser } from './utils/onitUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    OnInitUser();
  }
}
