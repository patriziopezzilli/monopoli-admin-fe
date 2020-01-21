import {Observable} from 'rxjs';
import {OnInit} from '@angular/core';

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

export class MenuDelGiornoSaveRequest implements OnInit {
  public primi: Array<Pasto> = [];
  public secondi: Array<Pasto> = [];
  public pizze: Array<Pasto> = [];

  constructor() {
  }

  ngOnInit(): void {
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
