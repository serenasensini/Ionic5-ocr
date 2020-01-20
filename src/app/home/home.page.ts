import { Component } from '@angular/core';
import {OCR, OCRResult, OCRSourceType} from '@ionic-native/ocr/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private ocr: OCR, private camera: Camera) { }

    decode() {
        this.camera.getPicture().then((imageData) => {
            this.ocr.recText(OCRSourceType.NORMFILEURL, imageData)
                .then(res => console.log(res))
                .catch((error: any) => console.error(error));
        }, (err) => {
            console.log(err);
        });
    }

}
