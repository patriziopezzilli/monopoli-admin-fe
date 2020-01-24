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
    title: 'Descrizione sito',
    link: '/pages/dashboard',
    icon: 'nb-title',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Gestione Recensioni',
    link: '/pages/dashboard',
    icon: 'nb-person',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    link: '/pages/dashboard',
    icon: 'nb-menu',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu del Giorno',
    icon: 'nb-notifications',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Menù di oggi',
        icon: 'nb-paper-plane',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Inserisci',
        icon: 'nb-compose',
        link: '/pages/extra-components/list',
      },
      {
        title: 'Lista sottoscritti',
        icon: 'nb-email',
        link: '/pages/extra-components/calendar',
      },
    ],
  },
];
