import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'components',
  templateUrl: 'components.component.html',
})
export class ComponentsComponent {

  result: string;

  constructor(private http: HttpClient) {
  }

  onCodeResult(resultString: string) {
    this.result = resultString;
  }
}
