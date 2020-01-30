import {Component} from '@angular/core';
import {Messaggio, Pasto} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  messaggi: Messaggio[];

  constructor(private http: HttpClient) {
    this.getMessaggi()
      .subscribe((data) => {
        this.messaggi = data;
      });
  }

  getMessaggi(): Observable<Messaggio[]> {
    return this.http.get<Messaggio[]>(Configuration.server + '/messaggi')
      .pipe(
        map(
          (data: Messaggio[]) => data.map(event => {
            return new Messaggio(event.id, event.nome, event.mail, event.messaggio, event.risposta);
          }),
        ),
      );
  }
}
