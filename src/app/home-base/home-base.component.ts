import { Component } from '@angular/core';
import { HomeBaseCardComponent } from '../home-base-card/home-base-card.component';

@Component({
  selector: 'app-home-base',
  standalone: true,
  imports: [HomeBaseCardComponent],
  templateUrl: './home-base.component.html',
  styleUrl: './home-base.component.scss',
})
export class HomeBaseComponent {
  baseText = [
    'We are committed to providing high-quality products that are both durable and fashionable. We strive to provide a seamless shopping experience for our customers and believe in being open and honest about our products and business practices',
    'Our mission at Universal Style is to make fashion easy and enjoyable. We understand that the modern individual is always on the go, and we strive to offer products that can keep up with their dynamic lifestyle. From everyday basics to statement pieces, our products are designed to make you look and feel your best, no matter the occasion.',
    'Become the leading e-commerce platform for clothing and accessories, recognized for our commitment to quality, style, and affordability. Including customer support will be the next step in the journey.',
  ];
}
