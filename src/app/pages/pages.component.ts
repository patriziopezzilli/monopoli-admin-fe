import {Component, OnInit} from '@angular/core';
import {NbAccessChecker} from '@nebular/security';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sottoscritto} from "../@core/data/stats-progress-bar";
import {Configuration} from "../app.component";
import {map} from "rxjs/operators";
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu;

  constructor(private http: HttpClient) {
    this.getMenuItem()
      .subscribe((data) => {
        this.menu = data;
      });
  }

  ngOnInit() {
  }

  getMenuItem(): Observable<NbMenuItem[]> {
    return this.http.get<NbMenuItem[]>(Configuration.server + '/portal/menu')
      .pipe(
        map(
          (data: NbMenuItem[]) => data.map(event => {
            return event;
          }),
        ),
      );
  }
}
