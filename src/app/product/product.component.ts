import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
    `
      .low{
        color: yellow;
      }
      .medium{
        color: blue;
      }
      .high{
        color: red;
      }    
    `
  ]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() {
    

  }

  addPrice() {
    this.product.addPrice();
  }
  subPrice() {
    this.product.subPrice();
  }
  ngOnInit() {
  }

}
