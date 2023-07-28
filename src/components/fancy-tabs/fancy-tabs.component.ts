import { Component, Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'fancy'
})
class fancyDirective {
  //@ViewChildren
}

@Component({
  selector: 'app-fancy-tabs',
  templateUrl: './fancy-tabs.component.html',
  styleUrls: ['./fancy-tabs.component.css']
})
export class FancyTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
