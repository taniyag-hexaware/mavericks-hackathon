import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as test from '../products-card/test.json'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  data :any =  test.value[0];
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('productId'));
  console.log(productIdFromRoute);
  }

}
