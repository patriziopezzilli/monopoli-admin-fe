import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'templates',
  templateUrl: 'templates.component.html',
})
export class TemplatesComponent {

  option = 1;

  constructor(private http: HttpClient) {

  }

}
