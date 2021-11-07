import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';
import '@google/model-viewer';
import * as categoryData from './list-category.json'
import * as data from './test.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  // categories: any[] = [
  //   {
  //     name: 'Laptops',
  //   },
  //   {
  //     name: 'Accessories',
  //   },
  //   {
  //     name: 'Cameras',
  //   },
  // ];
  loading = false;
  productPageCounter = 1;
  additionalLoading = false;
  categories :any =  categoryData.value;
  mainData : any = data.value[0];
  Product_Image: "https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.png";
  category:any = 'test';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  public screenWidth: any;
  public screenHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.loading = true;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);
  }

//myfunc define

  showMoreProducts(): void {
    this.additionalLoading = true;
    this.productPageCounter = this.productPageCounter + 1;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = [...this.products, ...res];
          this.additionalLoading = false;
        },
        (err) => {
          console.log(err);
          this.additionalLoading = false;
        }
      );
    }, 500);
  }

  categorySelect(category)
  {
    this.category=category;
  
  }
}

