import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChatMessage, ChatMessageRequest} from '../../../@core/data/stats-progress-bar';
import {User} from '../../../models/User';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {map, takeWhile} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Configuration} from '../../../app.component';

@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html',
})
export class ChatComponent {

  private alive = true;
  private httpClient: HttpClient;
  messages: ChatMessage[];
  user: User;

  constructor(private http: HttpClient, private tokenService: NbTokenService) {
    this.httpClient = http;
    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.user.displayName = this.user.firstName + ' ' + this.user.lastName;
      }
    });

    this.getMessages()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.messages = data;
      });
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.http.get(Configuration.server + '/chat/messages' + '?email=' + this.user.email).pipe(
      map((data: any[]) => data.map((item: any) => new ChatMessage(
        item.author,
        item.date,
        item.author !== 'You',
        item.message,
        null,
      ))),
    );
  }

  sendMessage(event: any) {
    const text = event.message;
    this.http.post(Configuration.server + '/chat/messages', new ChatMessageRequest(this.user.email, text))
      .subscribe({
        complete: function () {
          console.log('> server return ok');
        }, error: function (p1: any) {
          console.log('> server return ERROR');
        }, next() {
        },
      });

    this.messages.push(new ChatMessage(
      'You',
      '',
      false,
      text,
      null,
    ));
  }
}
