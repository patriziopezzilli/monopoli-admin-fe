import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {Injectable} from '@angular/core';
import {User} from './models/User';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: NbTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        const user: User = token.getPayload();
        localStorage.setItem('currentUser', JSON.stringify(user));
        const tokenValue = token.getValue();
        req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + tokenValue)});
        req = req.clone({headers: req.headers.append('M-ID', user.merchant)});
      }
    });

    req = req.clone({headers: req.headers.append('Accept', 'application/json').append('Content-Type', 'application/json')});
    return next.handle(req);
  }
}
