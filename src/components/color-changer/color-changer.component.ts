import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnInit {

  @HostBinding('style.backgroundColor') bgColor = "green";

  constructor() { }

  ngOnInit(): void {

  }

  changeBackgroundColor() {
    this.bgColor = "#FF0000";
  }

}
