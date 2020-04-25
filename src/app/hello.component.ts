import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Liar's Dice</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  /*@Input() dValSet1: boolean;
  @Input() dValSet2: boolean;
  @Input() dValSet3: boolean;
  @Input() dValSet4: boolean;
  @Input() dValSet5: boolean;*/
}
