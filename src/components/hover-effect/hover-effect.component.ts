import { Component, HostBinding, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.css']
})
export class HoverEffectComponent implements OnInit {

  @HostBinding('style.background-color') isHovered = 'grey';
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = 'black';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
