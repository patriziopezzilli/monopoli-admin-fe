import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {User} from '../../../models/User';
import {Observable} from "rxjs";
import {Payment} from "../../../@core/data/stats-progress-bar";
import {Configuration} from "../../../app.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'payments',
  templateUrl: 'payments.component.html',
})
export class PaymentsComponent {

  payments: Payment[];
  plan;
  merchant;
  user: User;

  constructor(private http: HttpClient, private tokenService: NbTokenService) {

    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.merchant = this.user.merchant;
        this.plan = this.user.merchantPlan;
      }
    });

    this.getPayments()
      .subscribe((data) => {
        this.payments = data;
      });
  }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(Configuration.server + '/payments?email=' + this.user.email)
      .pipe(
        map(
          (data: Payment[]) => data.map(event => {
            return new Payment(
              event.email,
              event.merchant,
              event.name,
              event.description,
              event.plan,
              event.amount,
              event.externalId,
              event.paid,
              event.paid ? 'success' : 'danger',
            );
          }),
        ),
      );
  }
}
