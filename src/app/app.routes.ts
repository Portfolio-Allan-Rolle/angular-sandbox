import { Routes } from '@angular/router';
import { MorpionComponent } from 'src/components/morpion/morpion.component';

export const routes: Routes = [
  {
    path: 'amundi',
    loadComponent: () =>
      import(
        '../components/amundi-calculator/amundi-calculator.component'
      ).then((m) => m.AmundiCalculatorComponent),
  },
  {
    path: 'morpion',
    loadComponent: () =>
      import('../components/morpion/morpion.component').then(
        (m) => m.MorpionComponent
      ),
  },
];
