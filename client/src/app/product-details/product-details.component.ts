import { Component, OnInit } from '@angular/core';
import * as test from '../products-card/test.json'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  data :any =  test.value[0];
  constructor() { }

  ngOnInit(): void {
  }

}
