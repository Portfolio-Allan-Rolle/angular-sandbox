import { Routes } from '@angular/router';

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
  {
    path: 'color-changer',
    loadComponent: () =>
      import('../components/color-changer/color-changer.component').then(
        (m) => m.ColorChangerComponent
      ),
  },
  {
    path: 'hover-effect',
    loadComponent: () =>
      import('../components/hover-effect/hover-effect.component').then(
        (m) => m.HoverEffectComponent
      ),
  },
];
