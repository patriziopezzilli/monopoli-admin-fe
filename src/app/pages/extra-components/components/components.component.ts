import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BarecodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'components',
  templateUrl: 'components.component.html',
})
export class ComponentsComponent implements AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }
}
