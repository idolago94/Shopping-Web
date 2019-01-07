import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {Router} from "@angular/router"; 
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { OrdersService } from 'src/app/services/orders.service';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  loginAlert: string;
  userCart: any;
  lastOrder: any;

  numberProducts: number;
  numberOrders: number;

  constructor( private userService:UsersService, private router: Router, private cartService:CartService, private productService:ProductService, private orderService:OrdersService, private cartProductService:CartProductService ) { }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.numberProducts = data.length;
    });
    this.orderService.getAll().subscribe((data) => {
      this.numberOrders = data.length;
    });
    this.orderService.orderSubmitted.subscribe(() => {
      this.chackLastOrder(this.userService.currentUser.id);
    });
    this.cartService.newCartOpened.subscribe(() => {
      this.checkOpenCart(this.userService.currentUser.id);
    });
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe((data) => {
      if(data.failedAuthenticate){
        this.loginAlert = data.failedAuthenticate;
      }
      else {
        this.loginAlert = null;
        this.userService.currentUser = data;
        if(this.userService.currentUser.authority=='admin'){
          this.router.navigate(['adminstrator']);
        }
        this.checkOpenCart(data.id);
        this.chackLastOrder(data.id);
      }
    });
  }

  checkOpenCart(userID) {
    this.cartService.getByUserId(userID).subscribe((data) => {
      this.userCart = data[0];
    });
  }

  chackLastOrder(userID) {
    this.orderService.getByUserId(userID).subscribe((data) => {
      this.lastOrder = data[data.length-1];
    });
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      this.userService.currentUser = null;
      this.loginForm.reset();
    })
  }
}
