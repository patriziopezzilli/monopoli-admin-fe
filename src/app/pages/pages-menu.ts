import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    icon: 'nb-home',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu del Giorno',
    icon: 'nb-home',
    link: '/pages/tasks',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Inserisci',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Lista sottoscritti',
        link: '/pages/extra-components/calendar',
      },
  },
]
},
],
;
