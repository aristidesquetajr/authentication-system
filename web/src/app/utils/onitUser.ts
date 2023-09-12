import { getUser, setUser } from './localStorage';

export function OnInitUser() {
  const user = {
    name: 'admin',
    email: 'admin@gmail.com',
    pass: 'admin123',
    permissions: [
      {
        label: 'Criacao',
        checked: true,
      },
      {
        label: 'Delecao',
        checked: true,
      },
      {
        label: 'Edicao',
        checked: true,
      },
    ],
  };

  if (!getUser()) {
    setUser(user);
  }
}
