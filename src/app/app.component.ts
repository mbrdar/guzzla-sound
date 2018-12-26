import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aTone = new Audio();
  sTone = new Audio();
  dTone = new Audio();
  fTone = new Audio();

  A_KEYCODE = 65;
  S_KEYCODE = 83;
  D_KEYCODE = 68;
  F_KEYCODE = 70;

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.keyCode === this.A_KEYCODE) {
      this.aTone.play();
    }
    if (event.keyCode === this.S_KEYCODE) {
      this.sTone.play();
    }
    if (event.keyCode === this.D_KEYCODE) {
      this.dTone.play();
    }
    if (event.keyCode === this.F_KEYCODE) {
      this.fTone.playbackRate = 1;
      this.fTone.play();
    }
  }


//   @HostListener('mousemove', ['$event'])
//   onMousemove(event: MouseEvent) {
//       this.fTone.playbackRate = 0.9999999;
// /*    let playbackSpeed = 1;
//     for (let i = 0; i === 10; i++) {
//       playbackSpeed = playbackSpeed - 0.10;
//       // this.fTone.playbackRate = 0.9;
//     }*/
//   }

  constructor() {
    this.aTone.load();
    this.aTone.src = '../assets/samples/first-tone.wav';

    this.sTone.load();
    this.sTone.src = '../assets/samples/second-tone.wav';

    this.dTone.load();
    this.dTone.src = '../assets/samples/third-tone.wav';

    this.fTone.load();
    this.fTone.src = '../assets/samples/fourth-tone.wav';
  }
}
