import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/Contacto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contactos: Contacto[] = [
    new Contacto({
      name: "Jorge",
      phone: "945766707",
      avatarUrl: "http://localhost:4200/assets/contactos-avatar/Foto.png"
    }),
    new Contacto({
      name: "Ana Paula",
      phone: "949305974",
      avatarUrl: "http://localhost:4200/assets/contactos-avatar/Foto-1.png"
    })
  ]

  ngOnInit(): void {
  }
}
