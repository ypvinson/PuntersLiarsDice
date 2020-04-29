import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'StackBlitz';
  url1 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  url2 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  url3 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  url4 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  url5 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  urlT1 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  urlT2 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  urlT3 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  urlT4 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  urlT5 = 'https://i.ibb.co/bF4CF08/Blacks.png';
  dVal1Set = false;
  dVal2Set = false;
  dVal3Set = false;
  dVal4Set = false;
  dVal5Set = false;
  gameState = false;

  d1Button = 'Lock';
  d2Button = 'Lock';
  d3Button = 'Lock';
  d4Button = 'Lock';
  d5Button = 'Lock';
  liarButton = 'LIAR!!!'

  lockDie(setDie){
    switch (setDie){
      case 1:
        this.dVal1Set = !this.dVal1Set;
        if(this.dVal1Set) {
          this.d1Button = 'Locked'
        }
        else {
          this.d1Button = 'Lock'
        }
        break;
      case 2:
        this.dVal2Set = !this.dVal2Set;
        if(this.dVal2Set) {
          this.d2Button = 'Locked'
        }
        else {
          this.d2Button = 'Lock'
        }
        break;
      case 3:
        this.dVal3Set = !this.dVal3Set;
        if(this.dVal3Set) {
          this.d3Button = 'Locked'
        }
        else {
          this.d3Button = 'Lock'
        }
        break;
      case 4:
        this.dVal4Set = !this.dVal4Set;
        if(this.dVal4Set) {
          this.d4Button = 'Locked'
        }
        else {
          this.d4Button = 'Lock'
        }
        break;
      case 5:
        this.dVal5Set = !this.dVal5Set;
        if(this.dVal5Set) {
          this.d5Button = 'Locked'
        }
        else {
          this.d5Button = 'Lock'
        }
        break;
    }
  }

  rollDie() {
    if(this.dVal1Set) {
    }
    else {
      var dieVal1 = Math.ceil(Math.random()*6);
    }
    if(this.dVal2Set) {
    }
    else {
      var dieVal2 = Math.ceil(Math.random()*6);
    }
    if(this.dVal3Set) {
    }
    else {
      var dieVal3 = Math.ceil(Math.random()*6);
    }
    if(this.dVal4Set) {
    }
    else {
      var dieVal4 = Math.ceil(Math.random()*6);
    }
    if(this.dVal5Set) {
    }
    else {
      var dieVal5 = Math.ceil(Math.random()*6);
    }
    switch (dieVal1) {
    case 1:
        this.url1 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        this.dVal1Set = true;
        this.d1Button = 'Locked'
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
    //default: this.url1= 'https://i.ibb.co/bF4CF08/Blacks.png';
    }
    switch (dieVal2) {
    case 1:
        this.url2 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        this.dVal2Set = true;
        this.d2Button = 'Locked'
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
    //default: this.url2= 'https://i.ibb.co/bF4CF08/Blacks.png';
    }
    switch (dieVal3) {
    case 1:
        this.url3 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        this.dVal3Set = true;
        this.d3Button = 'Locked'
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
    //default: this.url3= 'https://i.ibb.co/bF4CF08/Blacks.png';
    }
    switch (dieVal4) {
    case 1:
        this.url4 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        this.dVal4Set = true;
        this.d4Button = 'Locked'
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
    //default: this.url4= 'https://i.ibb.co/bF4CF08/Blacks.png';
    }
    switch (dieVal5) {
    case 1:
        this.url5 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        this.dVal5Set = true;
        this.d5Button = 'Locked'
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
    //default: this.url5= 'https://i.ibb.co/bF4CF08/Blacks.png'; 
    }
  }
  showLocked() {
        if(this.dVal1Set) {
          this.urlT1 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        }
        if(this.dVal2Set) {
          this.urlT2 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        }
        if(this.dVal3Set) {
          this.urlT3 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        }
        if(this.dVal4Set) {
          this.urlT4 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        }
        if(this.dVal5Set) {
          this.urlT5 = 'https://i.ibb.co/pfwq5mV/Black1s.png';
        }
  }
  Liar() {
    this.gameState = !this.gameState;
    if(this.gameState) {
      this.liarButton = 'Reset'
      this.urlT1 = this.url1;
      this.urlT2 = this.url2;
      this.urlT3 = this.url3;
      this.urlT4 = this.url4;
      this.urlT5 = this.url5;
    }
    else {
      this.liarButton = 'LIAR!!!'
      this.url1 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.url2 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.url3 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.url4 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.url5 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.urlT1 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.urlT2 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.urlT3 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.urlT4 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.urlT5 = 'https://i.ibb.co/bF4CF08/Blacks.png';
      this.dVal1Set = false;
      this.dVal2Set = false;
      this.dVal3Set = false;
      this.dVal4Set = false;
      this.dVal5Set = false;
      this.d1Button = 'Lock';
      this.d2Button = 'Lock';
      this.d3Button = 'Lock';
      this.d4Button = 'Lock';
      this.d5Button = 'Lock';
    }
  
  }
}
