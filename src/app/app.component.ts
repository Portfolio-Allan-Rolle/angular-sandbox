import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sandbox';
  inputDummyData = signal(0);
  onChangeInputData() {
    const x = Math.floor(Math.random() * 100 + 1);
    this.inputDummyData.set(x);
  }
  outputDummyData = signal<number>(0)
  onChangeOutputData($event: number) {
    this.outputDummyData.set($event)
  }
}
