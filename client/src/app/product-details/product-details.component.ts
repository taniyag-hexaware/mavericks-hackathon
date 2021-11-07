import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as test from '../products-card/test.json';
import * as variants from './variants.json'



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  variants = variants.value;
  data :any = variants.value[1];
  modelViewer = document.querySelector('#model-viewer-id #controls');
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('productId'));
  console.log(productIdFromRoute);

  console.log(document.getElementById("src"))
  }
  onSelect(value){
    console.log(value)
    document.getElementById("model-viewer-id").setAttribute("src" , value)
    for(let i=0;i<variants.value.length;i++){
      if(variants.value[i].Src == value){
        this.data = variants.value[i];
      }
      
    }
  }
  

}
