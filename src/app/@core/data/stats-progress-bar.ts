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

export class Config {
  constructor(
    public name: string,
    public value: string,
  ) {
  }
}

export class Recensione {
  constructor(
    public contenuto: string,
    public autore: string,
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
    public id: number,
    public nome: string,
    public descrizione: string,
    public prezzo: string,
    public categoria: string,
  ) {
  }
}

export class Messaggio {
  constructor(
    public id: number,
    public nome: string,
    public mail: string,
    public messaggio: string,
    public risposta: number,
  ) {
  }
}


export abstract class StatsProgressBarData {
  abstract getProgressInfoData(): Observable<ProgressInfo[]>;
}
