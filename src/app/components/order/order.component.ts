import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: Icategory[] = [];
  selectedCatId: number = 0;
    myDate: Date = new Date();
  totalPrice: number = 0;
  constructor(){
    this.categories = [
        { id: 1, name: 'Mobile' },
        { id: 2, name: 'Laptop' },
        { id: 3, name: 'Tablet' }
      ];
  }

  calcTotalPrice(top: number) {
    this.totalPrice = top;
  }

}
