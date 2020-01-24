import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    link: '/pages/dashboard',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Descrizione sito',
    link: '/pages/dashboard',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Gestione Recensioni',
    link: '/pages/dashboard',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    link: '/pages/dashboard',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu del Giorno',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Menù di oggi',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Inserisci',
        link: '/pages/extra-components/list',
      },
      {
        title: 'Lista sottoscritti',
        link: '/pages/extra-components/calendar',
      },
    ],
  },
];
