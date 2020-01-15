import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../app.component';
import {map} from 'rxjs/operators';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {

  constructor(private http: HttpClient) {
    super();
  }

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return this.http.get(Configuration.server + '/progress').pipe(
      map((data: any[]) => data.map((item: any) => new ProgressInfo(
        item.title,
        item.value,
        item.activeProgress,
        item.description,
      ))),
    );
  }
}
