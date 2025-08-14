import {
  Component,
  signal,
  AfterViewInit,
  ElementRef,
  ViewChild,
  computed,
} from '@angular/core';
import { ComponentReadme } from '../component-readme/component-readme';

@Component({
  selector: 'app-amundi-calculator',
  templateUrl: './amundi-calculator.component.html',
  styleUrl: './amundi-calculator.component.css',
  imports: [ComponentReadme],
})
export class AmundiCalculatorComponent implements AfterViewInit {
  private amount = 428;
  public total = computed(
    () => (this.amount * this.percentageWithdrawn()) / 100
  );
  public percentageWithdrawn = signal(100);
  public totalSavings = computed(() => this.amount - this.total());
  public percentageSavings = computed(() => 100 - this.percentageWithdrawn());
  @ViewChild('input') private input!: ElementRef;

  ngAfterViewInit(): void {
    this.percentageWithdrawn.set(+this.input.nativeElement.value);
  }

  onChange($event: Event) {
    this.percentageWithdrawn.set(+($event.target as HTMLInputElement).value);
  }
}
