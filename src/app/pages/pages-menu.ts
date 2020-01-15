import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    icon: 'nb-menu',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu del Giorno',
    icon: 'nb-person',
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
