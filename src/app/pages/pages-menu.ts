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
    link: '/pages/extra-components/form-inputs',
    icon: 'nb-title',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Gestione Recensioni',
    link: '/pages/extra-components/accordion',
    icon: 'nb-person',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Messaggi',
    link: '/pages/extra-components/tabs',
    icon: 'nb-paper-plane',
    data: {
      permission: 'view',
      resource: 'admin',
    },
  },
  {
    title: 'Menu',
    link: '/pages/extra-components/alert',
    icon: 'nb-menu',
    data: {
      permission: 'view',
      resource: 'admin',
    },
    children: [
      {
        title: 'Modifica o Elimina',
        icon: 'nb-paper-plane',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Aggiungi al menù',
        icon: 'nb-compose',
        link: '/pages/extra-components/tree',
      }],
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
