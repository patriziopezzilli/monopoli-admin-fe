import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../app.component';
import {MenuDelGiornoSaveRequest, Pasto} from '../../../@core/data/stats-progress-bar';

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

  constructor(private http: HttpClient) {

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
    const postRequest = new MenuDelGiornoSaveRequest();

    /**
     * Primi
     */
    if (null != this.primo1 && null != this.primo1prezzo && '' !== this.primo1 && '' !== this.primo1prezzo) {
      postRequest.primi.push(new Pasto(this.primo1, '', this.primo1prezzo, 'primo'));
    }
    if (null != this.primo2 && null != this.primo2prezzo && '' !== this.primo2 && '' !== this.primo2prezzo) {
      postRequest.primi.push(new Pasto(this.primo2, '', this.primo2prezzo, 'primo'));
    }
    if (null != this.primo3 && null != this.primo3prezzo && '' !== this.primo3 && '' !== this.primo3prezzo) {
      postRequest.primi.push(new Pasto(this.primo3, '', this.primo3prezzo, 'primo'));
    }
    if (null != this.primo4 && null != this.primo4prezzo && '' !== this.primo4 && '' !== this.primo4prezzo) {
      postRequest.primi.push(new Pasto(this.primo4, '', this.primo4prezzo, 'primo'));
    }
    if (null != this.primo5 && null != this.primo5prezzo && '' !== this.primo5 && '' !== this.primo5prezzo) {
      postRequest.primi.push(new Pasto(this.primo5, '', this.primo5prezzo, 'primo'));
    }

    /**
     * Secondi
     */
    if (null != this.secondo1 && null != this.secondo1prezzo && '' !== this.secondo1 && '' !== this.secondo1prezzo) {
      postRequest.secondi.push(new Pasto(this.secondo1, '', this.secondo1prezzo, 'secondo'));
    }
    if (null != this.secondo2 && null != this.secondo2prezzo && '' !== this.secondo2 && '' !== this.secondo2prezzo) {
      postRequest.secondi.push(new Pasto(this.secondo2, '', this.secondo2prezzo, 'secondo'));
    }
    if (null != this.secondo3 && null != this.secondo3prezzo && '' !== this.secondo3 && '' !== this.secondo3prezzo) {
      postRequest.secondi.push(new Pasto(this.secondo3, '', this.secondo3prezzo, 'secondo'));
    }
    if (null != this.secondo4 && null != this.secondo4prezzo && '' !== this.secondo4 && '' !== this.secondo4prezzo) {
      postRequest.secondi.push(new Pasto(this.secondo4, '', this.secondo4prezzo, 'secondo'));
    }

    /**
     * Pizze
     */
    if (null != this.pizza1 && null != this.pizza1prezzo && '' !== this.pizza1 && '' !== this.pizza1prezzo) {
      postRequest.pizze.push(new Pasto(this.pizza1, '', this.pizza1prezzo, 'pizza'));
    }
    if (null != this.pizza2 && null != this.pizza2prezzo && '' !== this.pizza2 && '' !== this.pizza2prezzo) {
      postRequest.pizze.push(new Pasto(this.pizza2, '', this.pizza2prezzo, 'pizza'));
    }

    /**
     * Invoke
     */
    console.log('> save ' + postRequest)
    this.post(postRequest);
  }

  public post(data: MenuDelGiornoSaveRequest): Observable<any> {
    return this.http.post(Configuration.server + '/menudelgiorno', data);
  }
}
