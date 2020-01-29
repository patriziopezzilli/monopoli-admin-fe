import {Component} from '@angular/core';
import {Pasto} from "../../../@core/data/stats-progress-bar";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Configuration} from "../../../app.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'ngx-alert',
  templateUrl: 'alert.component.html',
})
export class AlertComponent {

  antipasti: Pasto[];
  primiesecondi: Pasto[];
  contorni: Pasto[];
  pizze: Pasto[];
  dessert: Pasto[];

  constructor(private http: HttpClient) {
    this.getAntipasti()
      .subscribe((data) => {
        this.antipasti = data;
      });
    this.getPrimoESecondo()
      .subscribe((data) => {
        this.primiesecondi = data;
      });
    this.getContorni()
      .subscribe((data) => {
        this.contorni = data;
      });
    this.getPizze()
      .subscribe((data) => {
        this.pizze = data;
      });
    this.getDessert()
      .subscribe((data) => {
        this.dessert = data;
      });
  }

  getAntipasti(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=antipasto')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPrimoESecondo(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=primoesecondo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getContorni(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=contorno')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPizze(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=pizza')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getDessert(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menudelgiorno?categoria=dessert')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }
}
