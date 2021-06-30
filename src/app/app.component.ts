import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Site';
  navItems: Array<String> = ["Dashboard", "My Profile", "Nav Item 1", "Nav Item 2", "Nav Item 3"];
}
