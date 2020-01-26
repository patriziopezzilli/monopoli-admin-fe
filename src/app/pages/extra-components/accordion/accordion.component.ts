import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Recensione} from "../../../@core/data/stats-progress-bar";
import {Configuration} from "../../../app.component";

@Component({
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  recensione1: string = '';
  autore1: string = '';

  recensione2: string = '';
  autore2: string = '';

  recensione3: string = '';
  autore3: string = '';

  constructor(private http: HttpClient) {

    this.getRecensione1()
      .subscribe((data) => {
        this.recensione1 = data.contenuto;
        this.autore1 = data.autore;
      });

    this.getRecensione2()
      .subscribe((data) => {
        this.recensione2 = data.contenuto;
        this.autore2 = data.autore;
      });

    this.getRecensione3()
      .subscribe((data) => {
        this.recensione3 = data.contenuto;
        this.autore3 = data.autore;
      });
  }

  confermaRecensioneUno() {
    if (confirm('Sei sicuro di voler salvare la recensione?')) {
      console.log('> conferma recensione1..');
      const postRequest = new Recensione(this.recensione1, this.autore1);
      this.post('1', postRequest);
    }
  }

  confermaRecensioneDue() {
    if (confirm('Sei sicuro di voler salvare la recensione?')) {
      console.log('> conferma recensione2..');
      const postRequest = new Recensione(this.recensione2, this.autore2);
      this.post('2', postRequest);
    }
  }

  confermaRecensioneTre() {
    if (confirm('Sei sicuro di voler salvare la recensione?')) {
      console.log('> conferma recensione3..');
      const postRequest = new Recensione(this.recensione3, this.autore3);
      this.post('3', postRequest);
    }
  }

  public post(id: string, data: Recensione) {
    this.http.post(Configuration.server + '/tripadvisor?id=' + id, data).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  getRecensione1(): Observable<Recensione> {
    return this.http.get<Recensione>(Configuration.server + '/tripadvisor?id=1')
      .pipe();
  }

  getRecensione2(): Observable<Recensione> {
    return this.http.get<Recensione>(Configuration.server + '/tripadvisor?id=2')
      .pipe();
  }

  getRecensione3(): Observable<Recensione> {
    return this.http.get<Recensione>(Configuration.server + '/tripadvisor?id=3')
      .pipe();
  }

  changeRecensione1(r: string) {
    this.recensione1 = r;
  }

  changeRecensione2(r: string) {
    this.recensione2 = r;
  }

  changeRecensione3(r: string) {
    this.recensione3 = r;
  }

  changeAutore1(a: string) {
    this.autore1 = a;
  }

  changeAutore2(a: string) {
    this.autore2 = a;
  }

  changeAutore3(a: string) {
    this.autore3 = a;
  }
}
