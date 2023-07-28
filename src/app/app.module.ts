import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JsonPlaceholderApiUsersComponent } from '../components/json-placeholder-api-users/json-placeholder-api-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorChangerComponent } from '../components/color-changer/color-changer.component';
import { HoverEffectComponent } from '../components/hover-effect/hover-effect.component';
import { FancyTabsComponent } from '../components/fancy-tabs/fancy-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonPlaceholderApiUsersComponent,
    ColorChangerComponent,
    HoverEffectComponent,
    FancyTabsComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
