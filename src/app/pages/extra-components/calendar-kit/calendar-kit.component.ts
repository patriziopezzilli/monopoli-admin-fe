import {Component} from '@angular/core';
import {CalendarKitMonthCellComponent} from './month-cell/month-cell.component';
import {Pasto} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-calendar-kit',
  templateUrl: 'calendar-kit.component.html',
  styleUrls: ['calendar-kit.component.scss'],
  entryComponents: [CalendarKitMonthCellComponent],
})
export class CalendarKitFullCalendarShowcaseComponent {

  primi: Pasto[];
  secondi: Pasto[];
  pizze: Pasto[];

  constructor(private http: HttpClient) {
    this.getPrimi()
      .subscribe((data) => {
        this.primi = data;
      });
    this.getSecondi()
      .subscribe((data) => {
        this.secondi = data;
      });
    this.getPizza()
      .subscribe((data) => {
        this.pizze = data;
      });
  }

  public inviaMail() {
    console.log('> invia mail..');

    this.http.get<any>(Configuration.server + '/menudelgiorno/mail').subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  public inviaStampa() {
    console.log('> invia in stampa..');

    this.http.get<any>(Configuration.server + '/menudelgiorno/stampa').subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  getPrimi(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=primo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getSecondi(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=secondo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPizza(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=pizza')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }
}
