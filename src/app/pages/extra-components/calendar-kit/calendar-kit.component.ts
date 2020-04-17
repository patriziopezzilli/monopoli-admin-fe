import {Component} from '@angular/core';
import {CalendarKitMonthCellComponent} from './month-cell/month-cell.component';
import {Pasto} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';
import {NbToastrService} from '@nebular/theme';

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

  constructor(private toastrService: NbToastrService, private http: HttpClient) {
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
    if (confirm('Sei sicuro di voler inviare la mail ai clienti?')) {
      console.log('> invia mail..');

      this.http.get<any>(Configuration.server + '/dailymenu/mail').subscribe({
        complete: function () {
          console.log('> server return OK');
          alert('Email inviata con successo ai clienti!');

          const status = 'success';
          const position = 'top-right';

          this.toastrService.show(
            '',
            `Email inviata con successo ai clienti!`,
            { position, status });
        }, error: function (p1: any) {
          console.log('> server return ERROR');
        }, next() {
        },
      });
    }
  }

  public inviaStampa() {
    if (confirm('Sei sicuro di voler inviare il menu in stampa?')) {
      console.log('> invia in stampa..');

      this.http.get<any>(Configuration.server + '/dailymenu/print').subscribe({
        complete: function () {
          console.log('> server return OK');
          alert('Email con il pdf da stampare inviata con successo!');
        }, error: function (p1: any) {
          console.log('> server return ERROR');
        }, next() {
        },
      });
    }
  }

  getPrimi(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/dailymenu?categoria=primo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(null, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getSecondi(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/dailymenu?categoria=secondo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(null, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPizza(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/dailymenu?categoria=pizza')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(null, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }
}
