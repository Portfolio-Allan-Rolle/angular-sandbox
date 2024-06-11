import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JsonPlaceholderApiUsersComponent } from '../components/json-placeholder-api-users/json-placeholder-api-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorChangerComponent } from '../components/color-changer/color-changer.component';
import { HoverEffectComponent } from '../components/hover-effect/hover-effect.component';
import { FancyTabsComponent } from '../components/fancy-tabs/fancy-tabs.component';
import { RxjsHigherOrderMappingOperatorsComponent } from '../components/rxjs-higher-order-mapping-operators/rxjs-higher-order-mapping-operators.component';
import { RxjsOfComponent } from '../components/rxjs-of/rxjs-of.component';
import { RxjsScanOperatorComponent } from '../components/rxjs-scan-operator/rxjs-scan-operator.component';
import { RxjsSearchComponent } from '../components/rxjs-search/rxjs-search.component';
import { SearchPipe } from '../components/rxjs-search/pipes/search.pipe';
import { RxjsSearchBisComponent } from '../components/rxjs-search-bis/rxjs-search-bis.component';
import { ReactiveFormExerciceComponent } from '../components/reactive-form-exercice/reactive-form-exercice.component';
import { AmundiCalculatorComponent } from 'src/components/amundi-calculator/amundi-calculator.component';
import { TableFilterComponent } from 'src/components/table-filter/table-filter.component';
import { CommunicationComponent } from 'src/components/communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonPlaceholderApiUsersComponent,
    ColorChangerComponent,
    HoverEffectComponent,
    FancyTabsComponent,
    RxjsHigherOrderMappingOperatorsComponent,
    RxjsOfComponent,
    RxjsScanOperatorComponent,
    RxjsSearchComponent,
    SearchPipe,
    RxjsSearchBisComponent,
    ReactiveFormExerciceComponent,
    AmundiCalculatorComponent,
    TableFilterComponent,
    CommunicationComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
