import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  constructor() { }

 count = [1,2,3,4];
  ngOnInit(): void {
  }

}
