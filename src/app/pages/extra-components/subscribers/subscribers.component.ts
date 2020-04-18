import {Component} from '@angular/core';
import {NbCalendarRange} from '@nebular/theme';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';
import {Sottoscritto} from '../../../@core/data/stats-progress-bar';
import {Observable} from 'rxjs';

@Component({
  selector: 'subscribers',
  templateUrl: 'subscribers.component.html',
  styleUrls: ['subscribers.component.scss'],
})
export class SubscribersComponent {

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
