import { enableProdMode, importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { provideRouter, withRouterConfig } from '@angular/router';

import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ),
    provideNoopAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
