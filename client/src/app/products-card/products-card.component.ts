import { Component, OnInit } from '@angular/core';
import * as test from './test.json'

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  data :any =  test.value;
  constructor() { }

 count = [1,2,3,4];
  ngOnInit() {
   
    console.log(this.data[0])
  }

}
