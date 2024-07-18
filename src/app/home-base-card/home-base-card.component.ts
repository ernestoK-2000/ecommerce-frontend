import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matDiamond,
  matRocket,
  matRocketLaunch,
  matVisibility,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-home-base-card',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './home-base-card.component.html',
  styleUrl: './home-base-card.component.scss',
  providers: provideIcons({ matDiamond, matRocketLaunch, matVisibility }),
})
export class HomeBaseCardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() iconName: string = 'mat-diamond';
  @Input() iconColor: string = 'white';
}
