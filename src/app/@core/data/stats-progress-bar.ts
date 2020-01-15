import {Observable} from 'rxjs';

export class ProgressInfo {
  constructor(
    public title: string,
    public value: number,
    public activeProgress: number,
    public description: string,
  ) {
  }
}

export class Sottoscritto {
  constructor(
    public mail: string,
  ) {
  }
}

export class Pasto {
  constructor(
    public nome: string,
    public descrizione: string,
    public prezzo: string,
    public categoria: string,
  ) {
  }
}


export abstract class StatsProgressBarData {
  abstract getProgressInfoData(): Observable<ProgressInfo[]>;
}
