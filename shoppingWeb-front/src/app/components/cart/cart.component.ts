import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { CartProductService } from 'src/app/services/cart-product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() preview_mode:boolean;
  cartTotalPrice: number = 0;

  search: string = '';

  constructor( private cartService:CartService, private userService:UsersService, private cartProductService:CartProductService, private router:Router ) { }

  ngOnInit() {
    // check for a open cart of the user
    this.cartService.getByUserId(this.userService.currentUser.id).subscribe((data) => {
      if(data.length>0) {
        this.cartService.openCart = data[0];
        this.getCartProducts(data[0]._id);
      }
    });
    this.cartService.cartNeedToUpdate.subscribe(() => {
      this.getCartProducts(this.cartService.openCart._id);
    })
  }

  // get all the products of the cart ( call after any update at the cart )
  getCartProducts(cartID) {
    this.cartProductService.getByCart(cartID).subscribe((data) => {
        this.cartProductService.openCartProducts = data;
        this.calculateTotalPrice();
    });
  }
  
  // calculate the total price of the cart ( call after getCartProducts() )
  calculateTotalPrice() {
    this.cartTotalPrice = 0;
    if(this.cartProductService.openCartProducts) {
      this.cartProductService.openCartProducts.map((cartProduct) => {
        this.cartTotalPrice+=cartProduct.total_price;
      });
    }
  }

  // delete the cart and all the products of the cart
  async deleteAllCart() {
    await this.cartProductService.openCartProducts.map((cartProduct) => {
      this.cartProductService.deleteCartProduct(cartProduct._id).subscribe((data) => {
      });
    });
    await this.cartService.deleteCart(this.cartService.openCart._id).subscribe((data)=>{
    });
    this.cartService.openCart = null;
    this.cartProductService.openCartProducts = null;
    this.calculateTotalPrice();
  }

}
