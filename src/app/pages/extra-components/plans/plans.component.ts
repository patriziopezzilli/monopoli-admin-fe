import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'plans',
  templateUrl: 'plans.component.html',
})
export class PlansComponent {

  option = 1;

  constructor(private http: HttpClient) {

  }

}
