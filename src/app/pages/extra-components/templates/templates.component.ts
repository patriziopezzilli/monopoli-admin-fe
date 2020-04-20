import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChangeRequest, ChatMessageRequest} from '../../../@core/data/stats-progress-bar';
import {Configuration} from '../../../app.component';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {User} from '../../../models/User';

@Component({
  selector: 'templates',
  templateUrl: 'templates.component.html',
})
export class TemplatesComponent {

  request = true;
  template;
  plan;
  merchant;
  user: User;

  constructor(private http: HttpClient, private tokenService: NbTokenService) {

    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.template = this.user.template;
        this.merchant = this.user.merchant;
        this.plan = this.user.merchantPlan;
      }
    });

    this.getRequest()
      .subscribe((data) => {
        if (data != null) {
          this.request = true;
        } else {
          this.request = false;
        }
      });
  }

  getRequest(): Observable<ChangeRequest> {
    return this.http.get<ChangeRequest>(Configuration.server + '/request/template')
      .pipe();
  }

  sendRequest(newTemplate: string) {
    this.http.post(Configuration.server + '/request', new ChangeRequest("template", this.template, newTemplate, this.merchant))
      .subscribe({
        complete: function () {
          console.log('> server return ok');
        }, error: function (p1: any) {
          console.log('> server return ERROR');
        }, next() {
        },
      });

    this.request = true;
  }
}
