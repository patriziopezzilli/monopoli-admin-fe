import {Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserData} from '../../../@core/data/users';
import {AnalyticsService, LayoutService} from '../../../@core/utils';
import {NbAuthJWTToken, NbAuthService, NbTokenService} from '@nebular/auth';
import {User} from '../../../models/User';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: User;

  userMenu = [];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private tokenService: NbTokenService,
              private authService: NbAuthService) {


  }

  ngOnInit() {
    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.user.displayName = this.user.firstName + ' ' + this.user.lastName;

        if (this.user.merchantPlan !== 'MONOPOLI') {
          this.userMenu.push({
            'title': 'Cambia piano',
            'link': '/pages/extra-components/plans',
          });
          this.userMenu.push({
            'title': 'I miei pagamenti',
            'link': '/pages/extra-components/payments',
          });
        }

        this.userMenu.push({
          'title': 'Vai al sito',
          'url': 'https://' + this.user.merchantUrl,
        });
        this.userMenu.push({
          'title': 'Logout',
          'link': '/auth/logout',
        });
      }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
