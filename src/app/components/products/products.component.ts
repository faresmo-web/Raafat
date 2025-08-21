import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products: Iproduct[] = [];
  totalOrder: number = 0;
  filteredProducts:Iproduct[];

  // 1 - DEFIN EVENT
  @Output() onTotalPriceChanged:EventEmitter<number>

  @Input() recievedCatId: number = 0;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Iphone 1',
        price: 250,
        quantity: 10,
        imgUrl: './assets/11.jpg',
        catId: 1
      },
      {
        id: 2,
        name: 'Iphone 2',
        price: 300,
        quantity: 2,
        imgUrl: 'assets/8.jpg',
        catId: 1
      },
      {
        id: 3,
        name: 'laptop HP',
        price: 350,
        quantity: 1,
        imgUrl: 'assets/3.jpg',
        catId: 2
      },
      {
        id: 4,
        name: 'laptop Dell',
        price: 800,
        quantity: 15,
        imgUrl: 'assets/2.jpg',
        catId: 2
      },
      {
        id: 5,
        name: 'MacBook pro',
        price: 900,
        quantity: 12,
        imgUrl: 'assets/4.jpg',
        catId: 2
      },
      {
        id: 6,
        name: 'iPad 1',
        price: 1000,
        quantity: 20,
        imgUrl: 'assets/5.jpg',
        catId: 3
      },
      {
        id: 7,
        name: 'iPad 2',
        price: 400,
        quantity: 18,
        imgUrl: 'assets/7.jpg',
        catId: 3
      },
      {
        id: 8,
        name: 'iPad 3',
        price: 450,
        quantity: 0,
        imgUrl: 'assets/6.jpg',
        catId: 3
      },
      {
        id: 9,
        name: 'laptop Dell',
        price: 500,
        quantity: 5,
        imgUrl: 'assets/9.jpg',
        catId: 2
      },
      {
        id: 10,
        name: 'Iphone 3',
        price: 600,
        quantity: 8,
        imgUrl: 'assets/10.jpg',
        catId: 1
      }
    ]
    this.filteredProducts = this.products;

    this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges() {
    this.filterProducts();
  }
  // Methods to handle product operations can be added here
  buy(count: string , price: number){
    this.totalOrder += +count * price
    // 2 - FIRE EVENT
    this.onTotalPriceChanged.emit(this.totalOrder);
  }
  filterProducts(){
    if (this.recievedCatId == 0) {
      this.filteredProducts = this.products;
    }else{
      this.filteredProducts = this.products.filter((pro) => pro.catId == this.recievedCatId)
    }
  }

}
