import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JsonPlaceholderApiUsersComponent } from '../components/json-placeholder-api-users/json-placeholder-api-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorChangerComponent } from '../components/color-changer/color-changer.component';
import { HoverEffectComponent } from '../components/hover-effect/hover-effect.component';
import { FancyTabsComponent } from '../components/fancy-tabs/fancy-tabs.component';
import { RxjsHigherOrderMappingOperatorsComponent } from '../components/rxjs-higher-order-mapping-operators/rxjs-higher-order-mapping-operators.component';
import { RxjsOfComponent } from '../components/rxjs-of/rxjs-of.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonPlaceholderApiUsersComponent,
    ColorChangerComponent,
    HoverEffectComponent,
    FancyTabsComponent,
    RxjsHigherOrderMappingOperatorsComponent,
    RxjsOfComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
