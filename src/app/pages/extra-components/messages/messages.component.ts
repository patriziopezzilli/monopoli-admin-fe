import {Component} from '@angular/core';
import {Messaggio} from '../../../@core/data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'messages',
  styleUrls: ['./messages.component.scss'],
  templateUrl: './messages.component.html',
})
export class MessagesComponent {

  messaggi: Messaggio[];

  constructor(private router: Router, private http: HttpClient) {
    this.getMessaggi()
      .subscribe((data) => {
        this.messaggi = data;
      });
  }

  getMessaggi(): Observable<Messaggio[]> {
    return this.http.get<Messaggio[]>(Configuration.server + '/messages')
      .pipe(
        map(
          (data: Messaggio[]) => data.map(event => {
            return new Messaggio(event.id, event.nome, event.mail, event.messaggio, event.risposta);
          }),
        ),
      );
  }

  inviaRisposta(id: number, risposta) {
    this.post(id, risposta);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  public post(messaggioId: number, risposta) {
    this.http.post(Configuration.server + '/messages?messaggioId=' + messaggioId + '&risposta=' + risposta.value, {}).subscribe({
      complete: function () {
        alert('Risposta inviata con successo!');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

}
