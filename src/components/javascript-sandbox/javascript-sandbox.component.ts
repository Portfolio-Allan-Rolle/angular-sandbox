import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-sandbox',
  templateUrl: './javascript-sandbox.component.html',
  styleUrl: './javascript-sandbox.component.css',
})
export class JavascriptSandboxComponent implements OnInit {
  public name = 'Allan';

  ngOnInit(): void {
    console.log(this);
  }
}
