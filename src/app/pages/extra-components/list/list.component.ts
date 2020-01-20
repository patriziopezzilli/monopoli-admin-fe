import {Component} from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {

  /**
   * Variables
   */

  primo1: string = '';
  primo1prezzo: string = '';
  primo2: string = '';
  primo2prezzo: string = '';
  primo3: string = '';
  primo3prezzo: string = '';
  primo4: string = '';
  primo4prezzo: string = '';
  primo5: string = '';
  primo5prezzo: string = '';
  secondo1: string = '';
  secondo1prezzo: string = '';
  secondo2: string = '';
  secondo2prezzo: string = '';
  secondo3: string = '';
  secondo3prezzo: string = '';
  secondo4: string = '';
  secondo4prezzo: string = '';
  pizza1: string = '';
  pizza1prezzo: string = '';
  pizza2: string = '';
  pizza2prezzo: string = '';

  constructor() {

  }

  /**
   * Change method
   */

  changePrimo1(primo: string) {
    this.primo1 = primo;
  }

  changePrimo1Prezzo(primo: string) {
    this.primo1prezzo = primo;
  }

  changePrimo2(primo: string) {
    this.primo2 = primo;
  }

  changePrimo2Prezzo(primo: string) {
    this.primo2prezzo = primo;
  }

  changePrimo3(primo: string) {
    this.primo3 = primo;
  }

  changePrimo3Prezzo(primo: string) {
    this.primo3prezzo = primo;
  }

  changePrimo4(primo: string) {
    this.primo1 = primo;
  }

  changePrimo4Prezzo(primo: string) {
    this.primo1prezzo = primo;
  }

  changePrimo5(primo: string) {
    this.primo5 = primo;
  }

  changePrimo5Prezzo(primo: string) {
    this.primo5prezzo = primo;
  }


  changeSecondo1(primo: string) {
    this.secondo1 = primo;
  }

  changeSecondo1Prezzo(primo: string) {
    this.secondo1prezzo = primo;
  }

  changeSecondo2(primo: string) {
    this.secondo2 = primo;
  }

  changeSecondo2Prezzo(primo: string) {
    this.secondo2prezzo = primo;
  }

  changeSecondo3(primo: string) {
    this.secondo3 = primo;
  }

  changeSecondo3Prezzo(primo: string) {
    this.secondo3prezzo = primo;
  }

  changeSecondo4(primo: string) {
    this.secondo4 = primo;
  }

  changeSecondo4Prezzo(primo: string) {
    this.secondo4prezzo = primo;
  }

  changePizza1(primo: string) {
    this.pizza1 = primo;
  }

  changePizza1Prezzo(primo: string) {
    this.pizza1prezzo = primo;
  }

  changePizza2(primo: string) {
    this.pizza2 = primo;
  }

  changePizza2Prezzo(primo: string) {
    this.pizza2prezzo = primo;
  }

  /**
   * Business logic
   */
  confermaMenu() {
    console.log('> conferma menu..');
  }
}
