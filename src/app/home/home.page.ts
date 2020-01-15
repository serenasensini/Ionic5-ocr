import { Component } from '@angular/core';
import { OCR, OCRSourceType } from '@ionic-native/ocr/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ocr: OCR) { }

  decode() {
    this.ocr.recText(OCRSourceType.NORMFILEURL, 'assets/testocr.png')
        .then((res) => console.log(JSON.stringify(res)))
        .catch((error: any) => console.error(error));
  }

}
