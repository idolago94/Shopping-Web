import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() details:any;
  productData:any;

  constructor( private productService:ProductService ) { }

  ngOnInit() {
    this.productService.getById(this.details.product_id).subscribe((data) => {
      this.productData = data;
    })
  }

}
