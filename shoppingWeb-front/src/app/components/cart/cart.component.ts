import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private cartService:CartService, private userService:UsersService, private cartProductService:CartProductService ) { }

  userCart = {
    details: '',
    products:''
  };

  ngOnInit() {
    this.cartService.getByUserId(this.userService.currentUser.id).subscribe((data) => {
      this.userCart.details = data;
      this.cartProductService.getByCart(data[0]._id).subscribe((data) => {
        this.userCart.products = data;
      })
    })
  }

}
