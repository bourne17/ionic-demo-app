import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgRes: any;
  options: any;
  player: any;
  videoId = '';
  stopped = true;

  constructor(private imgPicker: ImagePicker) {}


  imagePicker() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1,
    };

    this.imgRes = [];
    this.imgPicker.getPictures(this.options).then(
      (results) => {
        for (const element of results) {
          this.imgRes.push('data:image/jpeg;base64,' + element);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }
}
