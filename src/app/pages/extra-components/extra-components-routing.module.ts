import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExtraComponentsComponent} from './extra-components.component';
import {AddmenuComponent} from './add_menu/addmenu.component';
import {MenuComponent} from './menu/menu.component';
import {SubscribersComponent} from './subscribers/subscribers.component';
import {MessagesComponent} from './messages/messages.component';
import {ReviewComponent} from './review/review.component';
import {DescriptionComponent} from './description/description.component';
import {AdddailyComponent} from './add_daily/adddaily.component';
import {DailymenuComponent} from './dailymenu/dailymenu.component';
import {TemplatesComponent} from './templates/templates.component';
import {ChatComponent} from './chat/chat.component';
import {PlansComponent} from './plans/plans.component';
import {PaymentsComponent} from "./payments/payments.component";
import {ComponentsComponent} from "./components/components.component";

const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  children: [
    {
      path: 'components',
      component: ComponentsComponent,
    },
    {
      path: 'payments',
      component: PaymentsComponent,
    },
    {
      path: 'plans',
      component: PlansComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
    {
      path: 'templates',
      component: TemplatesComponent,
    },
    {
      path: 'subscribers',
      component: SubscribersComponent,
    },
    {
      path: 'add_daily',
      component: AdddailyComponent,
    },
    {
      path: 'description',
      component: DescriptionComponent,
    },
    {
      path: 'review',
      component: ReviewComponent,
    },
    {
      path: 'menu',
      component: MenuComponent,
    },
    {
      path: 'add_menu',
      component: AddmenuComponent,
    },
    {
      path: 'messages',
      component: MessagesComponent,
    },
    {
      path: 'dailymenu',
      component: DailymenuComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
