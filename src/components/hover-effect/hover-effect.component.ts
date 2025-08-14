import { Component, HostBinding, HostListener } from '@angular/core';
import { ComponentReadme } from '../component-readme/component-readme';

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.css'],
  imports: [ComponentReadme],
})
export class HoverEffectComponent {
  @HostBinding('style.background-color') isHovered = 'grey';
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = 'black';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = 'red';
  }
}
