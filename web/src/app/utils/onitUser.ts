import { getUser, setUser } from './localStorage';

export function OnInitUser() {
  const user = {
    name: 'admin',
    email: 'admin@gmail.com',
    pass: 'admin123',
    permissions: [
      {
        label: 'Criação',
        checked: true,
      },
      {
        label: 'Deleção',
        checked: true,
      },
      {
        label: 'Edição',
        checked: true,
      },
    ],
  };

  if (!getUser()) {
    setUser(user);
  }
}
