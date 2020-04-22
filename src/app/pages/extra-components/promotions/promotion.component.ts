import {Component, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {Observable} from 'rxjs';
import {Pasto, Promotion} from '../../../@core/data/stats-progress-bar';
import {Configuration} from '../../../app.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'promotion',
  templateUrl: 'promotion.component.html',
})
export class PromotionComponent {

  private alive = true;
  private httpClient: HttpClient;
  user: User;
  promotions: Promotion[];

  constructor(private http: HttpClient, private dialogService: NbDialogService, private tokenService: NbTokenService) {
    this.httpClient = http;
    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.user.displayName = this.user.firstName + ' ' + this.user.lastName;
      }
    });

    this.getPromotion()
      .subscribe((data) => {
        this.promotions = data;
      });
  }

  crea() {
    this.http.post(Configuration.server + '/promotions', new Promotion(null, this.inputTitle, this.imageSrc, null, 'modal', 'image', this.user.merchant)).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });

    this.inputTitle = null;
    this.imageSrc = null;

    this.getPromotion()
      .subscribe((data) => {
        this.promotions = data;
      });
  }

  public deleteById(id: number) {
    this.http.delete(Configuration.server + '/promotions/' + id, {}).subscribe({
      complete: function () {
        console.log('> server return OK');
      }, error: function (p1: any) {
        console.log('> server return ERROR');
      }, next() {
      },
    });

    this.getPromotion()
      .subscribe((data) => {
        this.promotions = data;
      });
  }

  getPromotion(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(Configuration.server + '/promotions')
      .pipe(
        map(
          (data: Promotion[]) => data.map(event => {
            return new Promotion(
              event.id,
              event.name,
              event.content,
              event.extraInfo,
              event.format,
              event.type,
              event.merchant,
            );
          }),
        ),
      );
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {context: ''});
  }

  private inputTitle: string;
  private imageSrc: string = null;

  handleInputChange(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleInputTextChange(e) {
    this.inputTitle = e.target.value;
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }

}
