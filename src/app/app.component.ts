import { Component, VERSION } from '@angular/core';
// import { ThemeService } from './modules/shared';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // constructor(public themer: ThemeService) {}
  constructor() {}
}
