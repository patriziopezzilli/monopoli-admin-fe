import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../../../@core/data/stats-progress-bar';
import {Configuration} from '../../../app.component';

@Component({
  selector: 'description',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.scss'],
})
export class DescriptionComponent {

  descrizione: string = '';

  constructor(private http: HttpClient) {
    this.getDescrizione()
      .subscribe((data) => {
        this.descrizione = data.value;
      });
  }

  confermaDescrizione() {
    if (confirm('Sei sicuro di voler salvare la descrizione?')) {
      console.log('> conferma descrizione..');
      const postRequest = new Config('descrizione', this.descrizione);
      this.post(postRequest);
    }
  }

  public post(data: Config) {
    this.http.post(Configuration.server + '/config/description', data).subscribe({
      complete: function () {
        console.log('> server return OK');
        alert('Descrizione aggiornata con successo!');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  changeDescrizione(descrizione: string) {
    this.descrizione = descrizione;
  }

  getDescrizione(): Observable<Config> {
    return this.http.get<Config>(Configuration.server + '/config/description')
      .pipe();
  }
}
