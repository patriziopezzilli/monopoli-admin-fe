import {Component} from '@angular/core';
import {Messaggio} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  messaggi: Messaggio[];

  constructor(private router: Router, private http: HttpClient) {
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

  inviaRisposta(id: number, risposta) {
    console.log('> invio risposta' + risposta.value + ' per la domanda ' + id + '..');
    this.post(id, risposta);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  public post(messaggioId: number, risposta) {
    this.http.post(Configuration.server + '/messaggi?messaggioId=' + messaggioId + '&risposta=' + risposta.value, {}).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

}
