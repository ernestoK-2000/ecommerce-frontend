import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matStar,
  matStarBorder,
  matStarHalf,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: provideIcons({ matStar, matStarHalf, matStarBorder }),
})
export class CardComponent {
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() img: string = '#';
  @Input() price: number = 0.0;
  @Input() rate: number = 0;
  @Input() rateCount: number = 0;

  fullStars: number = 0;
  halfStar: boolean = false;

  constructor() {}

  initRateStars() {}
}
