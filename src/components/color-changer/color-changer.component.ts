import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ComponentReadme } from '../component-readme/component-readme';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css'],
  imports: [ComponentReadme],
})
export class ColorChangerComponent {
  @HostBinding('style.backgroundColor') bgColor = 'green';

  constructor() {}

  changeBackgroundColor() {
    this.bgColor = '#FF0000';
  }

  resetBackgroundColor() {
    this.bgColor = 'green';
  }
}
