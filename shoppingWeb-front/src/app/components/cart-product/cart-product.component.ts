import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() details:any;
  productData:any;

  constructor( private productService:ProductService, private cartProductService:CartProductService, private cartService:CartService ) { }

  ngOnInit() {
    this.productService.getById(this.details.product_id).subscribe((data) => {
      this.productData = data;
    })
  }

  deleteCartProduct() {
    debugger;
    this.cartProductService.deleteCartProduct(this.details._id).subscribe((data) => {
      this.cartService.cartNeedToUpdate.next();
    })
  }

}
