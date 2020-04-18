import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    link: '/pages/dashboard',
    icon: 'nb-home',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Descrizione',
    link: '/pages/extra-components/description',
    icon: 'nb-title',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Recensioni',
    link: '/pages/extra-components/review',
    icon: 'nb-person',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Messaggi',
    link: '/pages/extra-components/messages',
    icon: 'nb-paper-plane',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Newsletter',
    icon: 'nb-email',
    link: '/pages/extra-components/subscribers',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    link: '/pages/extra-components/menu',
    icon: 'nb-menu',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Modifica o Elimina',
        icon: 'nb-paper-plane',
        link: '/pages/extra-components/menu',
      },
      {
        title: 'Aggiungi al menù',
        icon: 'nb-compose',
        link: '/pages/extra-components/add_menu',
      }],
  },
  {
    title: 'Menu del Giorno',
    icon: 'nb-notifications',
    link: '/pages/extra-components/dailymenu',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Menù di oggi',
        icon: 'nb-paper-plane',
        link: '/pages/extra-components/dailymenu',
      },
      {
        title: 'Inserisci',
        icon: 'nb-compose',
        link: '/pages/extra-components/add_daily',
      },
    ],
  },
];
