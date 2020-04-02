import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'StackBlitz';
  url1 = '';
  url2 = '';
  url3 = '';
  url4 = '';
  url5 = '';

  rollDie() {
    var dieVal1 = Math.ceil(Math.random()*6);
    var dieVal2 = Math.ceil(Math.random()*6);
    var dieVal3 = Math.ceil(Math.random()*6);
    var dieVal4 = Math.ceil(Math.random()*6);
    var dieVal5 = Math.ceil(Math.random()*6);

    switch (dieVal1) {
    case 1:
        this.url1 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        break;
    case 2:
        this.url1 = 'https://i.ibb.co/8D6HgqL/Black2s.png';
        break;
    case 3:
        this.url1 = 'https://i.ibb.co/47d4xGx/Black3s.png';
        break;
    case 4:
        this.url1 = 'https://i.ibb.co/mS4B6tD/Black4s.png';
        break;
    case 5:
        this.url1 = 'https://i.ibb.co/P4N9kzM/Black5s.png';
        break;
    case 6:
        this.url1 = 'https://i.ibb.co/mJ4BTph/Black6s.png';
        break; 
    }
    switch (dieVal2) {
    case 1:
        this.url2 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        break;
    case 2:
        this.url2 = 'https://i.ibb.co/8D6HgqL/Black2s.png';
        break;
    case 3:
        this.url2 = 'https://i.ibb.co/47d4xGx/Black3s.png';
        break;
    case 4:
        this.url2 = 'https://i.ibb.co/mS4B6tD/Black4s.png';
        break;
    case 5:
        this.url2 = 'https://i.ibb.co/P4N9kzM/Black5s.png';
        break;
    case 6:
        this.url2 = 'https://i.ibb.co/mJ4BTph/Black6s.png';
        break; 
    }
    switch (dieVal3) {
    case 1:
        this.url3 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        break;
    case 2:
        this.url3 = 'https://i.ibb.co/8D6HgqL/Black2s.png';
        break;
    case 3:
        this.url3 = 'https://i.ibb.co/47d4xGx/Black3s.png';
        break;
    case 4:
        this.url3 = 'https://i.ibb.co/mS4B6tD/Black4s.png';
        break;
    case 5:
        this.url3 = 'https://i.ibb.co/P4N9kzM/Black5s.png';
        break;
    case 6:
        this.url3 = 'https://i.ibb.co/mJ4BTph/Black6s.png';
        break; 
    }
    switch (dieVal4) {
    case 1:
        this.url4 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        break;
    case 2:
        this.url4 = 'https://i.ibb.co/8D6HgqL/Black2s.png';
        break;
    case 3:
        this.url4 = 'https://i.ibb.co/47d4xGx/Black3s.png';
        break;
    case 4:
        this.url4 = 'https://i.ibb.co/mS4B6tD/Black4s.png';
        break;
    case 5:
        this.url4 = 'https://i.ibb.co/P4N9kzM/Black5s.png';
        break;
    case 6:
        this.url4 = 'https://i.ibb.co/mJ4BTph/Black6s.png';
        break; 
    }
    switch (dieVal5) {
    case 1:
        this.url5 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        break;
    case 2:
        this.url5 = 'https://i.ibb.co/8D6HgqL/Black2s.png';
        break;
    case 3:
        this.url5 = 'https://i.ibb.co/47d4xGx/Black3s.png';
        break;
    case 4:
        this.url5 = 'https://i.ibb.co/mS4B6tD/Black4s.png';
        break;
    case 5:
        this.url5 = 'https://i.ibb.co/P4N9kzM/Black5s.png';
        break;
    case 6:
        this.url5 = 'https://i.ibb.co/mJ4BTph/Black6s.png';
        break; 
    }
  }
}
