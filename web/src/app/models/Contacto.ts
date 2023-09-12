export class Contacto {
  id?: string;
  name: string;
  phone: string;
  avatarUrl: string;

  constructor({ name, phone, avatarUrl }: Contacto) {
    this.id = Math.random().toString(36);
    this.name = name;
    this.phone = phone;
    this.avatarUrl = avatarUrl;
  }
}
