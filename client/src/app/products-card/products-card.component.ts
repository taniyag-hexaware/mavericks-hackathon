import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as test from './test.json';
import {ModelService} from '../services/model.service'

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  data :any =  test.value;
  @Input() public category 
  constructor(private modelService : ModelService) { }

 count = [1,2,3,4];
  ngOnInit() {
    this.modelService.getModel().subscribe(
      data=>{
        this.data=data.result;
        console.log(this.data);
        
      }
   )
   console.log(this.category);
   
  }
 
ngOnChanges(changes: SimpleChanges)
 {    console.log(changes.category.currentValue) 
      this.modelService.getModelByCategory(changes.category.currentValue).subscribe(
        data=>{
         console.log(data);
        }
      )
}



}
