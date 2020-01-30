import {NgModule} from '@angular/core';

import {TreeModule} from 'angular-tree-component';
import {ToasterModule} from 'angular2-toaster';

import {ThemeModule} from '../../@theme/theme.module';
import {ExtraComponentsRoutingModule} from './extra-components-routing.module';
// components
import {ExtraComponentsComponent} from './extra-components.component';
import {TreeComponent} from './tree/tree.component';
import {SpinnerInTabsComponent} from './spinner/spinner-in-tabs/spinner-in-tabs.component';
import {SpinnerInButtonsComponent} from './spinner/spinner-in-buttons/spinner-in-buttons.component';
import {SpinnerSizesComponent} from './spinner/spinner-sizes/spinner-sizes.component';
import {SpinnerColorComponent} from './spinner/spinner-color/spinner-color.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {InteractiveProgressBarComponent} from './progress-bar/interactive-progress-bar/interactive-progress-bar.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {AlertComponent} from './alert/alert.component';
import {ChatComponent} from './chat/chat.component';
import {TabsComponent} from './tabs/tabs.component';
import {CalendarComponent} from './calendar/calendar.component';
import {DayCellComponent} from './calendar/day-cell/day-cell.component';
import {StepperComponent} from './stepper/stepper.component';
import {ListComponent} from './list/list.component';
import {InfiniteListComponent} from './infinite-list/infinite-list.component';
import {NewsPostComponent} from './infinite-list/news-post/news-post.component';
import {NewsPostPlaceholderComponent} from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import {AccordionComponent} from './accordion/accordion.component';
import {NebularFormInputsComponent} from './form-inputs/nebular-form-inputs.component';
import {NebularSelectComponent} from './form-inputs/nebular-select/nebular-select.component';
import {CalendarKitFullCalendarShowcaseComponent} from './calendar-kit/calendar-kit.component';
import {CalendarKitMonthCellComponent} from './calendar-kit/month-cell/month-cell.component';
// service
import {NewsService} from './services/news.service';
import {NbBadgeModule, NbStepperModule} from '@nebular/theme';

const COMPONENTS = [
  ExtraComponentsComponent,
  TreeComponent,
  AlertComponent,
  ProgressBarComponent,
  InteractiveProgressBarComponent,
  SpinnerComponent,
  SpinnerColorComponent,
  SpinnerSizesComponent,
  SpinnerInButtonsComponent,
  SpinnerInTabsComponent,
  CalendarComponent,
  DayCellComponent,
  ChatComponent,
  TabsComponent,
  StepperComponent,
  ListComponent,
  InfiniteListComponent,
  NewsPostComponent,
  NewsPostPlaceholderComponent,
  AccordionComponent,
  NebularFormInputsComponent,
  NebularSelectComponent,
  CalendarKitFullCalendarShowcaseComponent,
  CalendarKitMonthCellComponent,
];

const SERVICES = [
  NewsService,
];

const MODULES = [
  ThemeModule,
  ExtraComponentsRoutingModule,
  TreeModule,
  NbStepperModule,
  ToasterModule.forRoot(),
];

@NgModule({
  imports: [
    ...MODULES,
    NbBadgeModule,
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
