import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Configuration} from "../../../app.component";
import {Pasto} from "../../../@core/data/stats-progress-bar";

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {

  selezione: string = 'Categoria';

  constructor(private http: HttpClient) {

  }

  crea(nome: string, descrizione: string, prezzo: string) {
    this.http.post(Configuration.server + '/menu', new Pasto(null, nome, descrizione, prezzo, this.selezione)).subscribe({
      complete: function () {
        console.log('> server return OK');
        alert('Pasto creato con successo!');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });
  }

  selection(selezione: string) {

    console.log('> scelgo ' + selezione);
    this.selezione = selezione;
  }
}
