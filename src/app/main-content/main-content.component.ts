import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
