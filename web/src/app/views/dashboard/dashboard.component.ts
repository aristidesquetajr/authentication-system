import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [
    {
      id: Math.random().toString(36),
      name: 'Cadeira',
      price: 435,
    },
  ];

  ngOnInit(): void {}
}
