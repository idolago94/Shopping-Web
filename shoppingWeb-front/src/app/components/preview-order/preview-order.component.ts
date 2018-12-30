import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';
import { CartService } from 'src/app/services/cart.service';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-preview-order',
  templateUrl: './preview-order.component.html',
  styleUrls: ['./preview-order.component.css']
})
export class PreviewOrderComponent implements OnInit {

  shippingDetails: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required]),
    adress: new FormControl(null, [Validators.required]),
    delivery_date: new FormControl(null, [Validators.required]),
    payment: new FormControl(null, [Validators.required])
  });

  constructor( private userService:UsersService, private orderService:OrdersService, private cartService:CartService, private cartProductService:CartProductService ) { }

  // disable dates who have more than 3 delivery at the same day
  myFilter = (d: Date): boolean => {
    const day = d.toLocaleDateString();
    let counter=0;
    debugger;
    this.arrayDayDelivary.map((orderDate) => {
      if(orderDate==day){
        counter++;
      }
    });
    if(counter>=3){
      return false;
    }
    return true;
  }

  allOrders:any;
  arrayDayDelivary:any = [];

  ngOnInit() {
    this.orderService.getAll().subscribe((data) => {
      this.allOrders = data;
      this.arrayDayDelivary = data.map((order) => order.delivery_date);
    });
  }

  // set the shipping details value by double click on the input
  setValue(controlName) {
    let newValue = this.userService.currentUser[controlName];
    this.shippingDetails.controls[controlName].setValue(newValue);
  }

  // calculate the total price of the cart ( call after getCartProducts() )
  calculateTotalPrice():number {
    let cartTotalPrice = 0;
    this.cartProductService.openCartProducts.map((cartProduct) => {
      cartTotalPrice+=cartProduct.total_price;
    });
    return cartTotalPrice;
  }

  // add new order to the database
  placeOrder() {
    debugger;
    let newOrder = Object.assign(
      this.shippingDetails.value,
      {user_id: this.userService.currentUser.id},
      {cart_id: this.cartService.openCart._id},
      {total_price: this.calculateTotalPrice()},
      {reservation_date: new Date().toLocaleDateString()}
    );
    newOrder.delivery_date = newOrder.delivery_date.toLocaleDateString();
    this.orderService.addOrder(newOrder).subscribe((data) => {
      // order added to database
    });

  }

}
