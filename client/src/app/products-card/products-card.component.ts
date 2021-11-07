import { Component, OnInit } from '@angular/core';
import * as test from './test.json';
import {ModelService} from '../services/model.service'

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  data :any =  test.value;
  constructor(private modelService : ModelService) { }

 count = [1,2,3,4];
  ngOnInit() {
  
   
  }

}
