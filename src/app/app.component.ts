import { Component, signal } from '@angular/core';
import { AmundiCalculatorComponent } from 'src/components/amundi-calculator/amundi-calculator.component';
import { MorpionComponent } from 'src/components/morpion/morpion.component';
import { FancyTabsComponent } from 'src/components/fancy-tabs/fancy-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MorpionComponent, AmundiCalculatorComponent, FancyTabsComponent],
})
export class AppComponent {
  title = 'sandbox';
  inputDummyData = signal(0);
  onChangeInputData() {
    const x = Math.floor(Math.random() * 100 + 1);
    this.inputDummyData.set(x);
  }
  outputDummyData = signal<number>(0);
  onChangeOutputData($event: number) {
    this.outputDummyData.set($event);
  }
}
