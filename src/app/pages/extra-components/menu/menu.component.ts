import {Component} from '@angular/core';
import {Pasto} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {

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

  modifica(id: number, nome: string, descrizione: string, prezzo: string, categoria: string) {
    this.modificaById(id, new Pasto(id, nome, descrizione, prezzo, categoria));

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

  delete(id: number) {
    this.deleteById(id);

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

  public modificaById(id: number, request: Pasto) {
    this.http.put(Configuration.server + '/menu/' + id, request).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  public deleteById(id: number) {
    this.http.delete(Configuration.server + '/menu/' + id, {}).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  getAntipasti(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menu?categoria=antipasto')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPrimoESecondo(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menu?categoria=primoesecondo')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getContorni(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menu?categoria=contorno')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getPizze(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menu?categoria=pizza')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }

  getDessert(): Observable<Pasto[]> {
    return this.http.get<Pasto[]>(Configuration.server + '/menu?categoria=dessert')
      .pipe(
        map(
          (data: Pasto[]) => data.map(event => {
            return new Pasto(event.id, event.nome, event.descrizione, event.prezzo, event.categoria);
          }),
        ),
      );
  }
}
