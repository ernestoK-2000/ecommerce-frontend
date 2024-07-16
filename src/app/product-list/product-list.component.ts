import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

interface IProduct{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule, NgxSpinnerComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: IProduct[] = []

  constructor(private productsService: ProductsService, private spinner: NgxSpinnerService){
    spinner.show()
    productsService.getProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: error => {
        console.error(error);
        spinner.hide()
      },
      complete: () => spinner.hide() 
    })
  }
}
