import { Component } from '@angular/core';
import { ClarityIcons, userIcon,boltIcon, sadFaceIcon,bugIcon,shieldIcon,certificateIcon } from '@cds/core/icon';
ClarityIcons.addIcons(userIcon,boltIcon,sadFaceIcon, bugIcon, shieldIcon,certificateIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-clarity';
  collapsed: boolean = true;
}
