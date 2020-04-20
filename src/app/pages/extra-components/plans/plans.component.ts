import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../../../models/User";
import {NbAuthJWTToken, NbTokenService} from "@nebular/auth";
import {Observable} from "rxjs";
import {ChangeRequest} from "../../../@core/data/stats-progress-bar";
import {Configuration} from "../../../app.component";

@Component({
  selector: 'plans',
  templateUrl: 'plans.component.html',
})
export class PlansComponent {

  request = true;
  plan;
  merchant;
  user: User;

  constructor(private http: HttpClient, private tokenService: NbTokenService) {

    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.plan = this.user.merchantPlan;
        this.merchant = this.user.merchant;
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
    return this.http.get<ChangeRequest>(Configuration.server + '/request/plan')
      .pipe();
  }

  sendRequest(newPlan: string) {
    this.http.post(Configuration.server + '/request', new ChangeRequest("plan", this.plan, newPlan, this.merchant))
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
