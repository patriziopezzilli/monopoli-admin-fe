import {Component} from '@angular/core';
import {NbCalendarRange} from '@nebular/theme';
import {DayCellComponent} from './day-cell/day-cell.component';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../app.component';
import {map, takeWhile} from 'rxjs/operators';
import {ProgressInfo, Sottoscritto} from '../../../@core/data/stats-progress-bar';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
  entryComponents: [DayCellComponent],
})
export class CalendarComponent {

  users: Sottoscritto[];
  date = new Date();
  range: NbCalendarRange<Date>;

  constructor(private http: HttpClient) {
    this.getSottoscritti()
      .subscribe((data) => {
        this.users = data;
      });
  }

  getSottoscritti(): Observable<Sottoscritto[]> {
    return this.http.get<Sottoscritto[]>(Configuration.server + '/dailymenu/subscribers')
      .pipe(
        map(
          (data: Sottoscritto[]) => data.map(event => {
            return new Sottoscritto(event.mail);
          }),
        ),
      );
  }
}
