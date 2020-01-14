import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {NbRoleProvider} from '@nebular/security';
import {User} from './models/User';
import {map} from 'rxjs/operators';


@Injectable()
export class AppRoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string | string[]> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          let user: User = token.getPayload();
          let defaultRole: Array<string> = ['guest'];
          let roles: string[];
          roles = token.isValid() ? user.roles : defaultRole;
          return roles;
        }),
      );
  }
}
