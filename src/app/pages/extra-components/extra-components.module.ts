import {NgModule} from '@angular/core';

import {TreeModule} from 'angular-tree-component';
import {ToasterModule} from 'angular2-toaster';

import {ThemeModule} from '../../@theme/theme.module';
import {ExtraComponentsRoutingModule} from './extra-components-routing.module';
// components
import {ExtraComponentsComponent} from './extra-components.component';
import {AddmenuComponent} from './add_menu/addmenu.component';
import {MenuComponent} from './menu/menu.component';
import {TemplatesComponent} from './templates/templates.component';
import {MessagesComponent} from './messages/messages.component';
import {SubscribersComponent} from './subscribers/subscribers.component';
import {AdddailyComponent} from './add_daily/adddaily.component';
import {DailymenuComponent} from './dailymenu/dailymenu.component';
import {ReviewComponent} from './review/review.component';
import {DescriptionComponent} from './description/description.component';
// service
import {NbBadgeModule, NbRadioModule, NbStepperModule} from '@nebular/theme';
import {ChatComponent} from './chat/chat.component';
import {PlansComponent} from './plans/plans.component';

const COMPONENTS = [
  ExtraComponentsComponent,
  AddmenuComponent,
  DailymenuComponent,
  TemplatesComponent,
  PlansComponent,
  MenuComponent,
  ChatComponent,
  SubscribersComponent,
  MessagesComponent,
  AdddailyComponent,
  ReviewComponent,
  DescriptionComponent,
];

const SERVICES = [];

const MODULES = [
  ThemeModule,
  ExtraComponentsRoutingModule,
  TreeModule,
  NbRadioModule,
  NbStepperModule,
  ToasterModule.forRoot(),
];

@NgModule({
  imports: [
    ...MODULES,
    NbBadgeModule,
    NbRadioModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ExtraComponentsModule {
}
