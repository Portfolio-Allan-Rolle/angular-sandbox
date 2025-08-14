import { Component, input } from '@angular/core';

@Component({
  selector: 'app-component-readme',
  imports: [],
  templateUrl: './component-readme.html',
  styleUrl: './component-readme.scss',
})
export class ComponentReadme {
  content = input.required<string[]>();
}
