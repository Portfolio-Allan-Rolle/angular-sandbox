import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenu } from 'src/components/app-menu/app-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, AppMenu],
})
export class AppComponent {
  title = 'sandbox';
}
