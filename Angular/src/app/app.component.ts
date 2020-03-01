import {Component} from '@angular/core';
import {onMainContentChange} from './app-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [onMainContentChange],
})
export class AppComponent {
  onSidebarChange: boolean;
}
