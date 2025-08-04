import { Component, signal } from '@angular/core';
import { HoverEffectComponent } from 'src/components/hover-effect/hover-effect.component';
import { JavascriptSandboxComponent } from 'src/components/javascript-sandbox/javascript-sandbox.component';
import { JsonPlaceholderApiUsersComponent } from 'src/components/json-placeholder-api-users/json-placeholder-api-users.component';
import { MorpionComponent } from 'src/components/morpion/morpion.component';
import { ReactiveFormExerciceComponent } from 'src/components/reactive-form-exercice/reactive-form-exercice.component';
import { RxjsHigherOrderMappingOperatorsComponent } from 'src/components/rxjs-higher-order-mapping-operators/rxjs-higher-order-mapping-operators.component';
import { RxjsOfComponent } from 'src/components/rxjs-of/rxjs-of.component';
import { RxjsSearchBisComponent } from 'src/components/rxjs-search-bis/rxjs-search-bis.component';
import { RxjsSearchComponent } from 'src/components/rxjs-search/rxjs-search.component';
import { TableFilterComponent } from 'src/components/table-filter/table-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MorpionComponent],
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
