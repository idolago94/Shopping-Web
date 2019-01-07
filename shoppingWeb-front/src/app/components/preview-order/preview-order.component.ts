import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';
import { CartService } from 'src/app/services/cart.service';
import { CartProductService } from 'src/app/services/cart-product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { ProductService } from 'src/app/services/product.service';
import { async } from 'q';
import { Observable } from 'rxjs';

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
    payment: new FormControl(null, [Validators.required, Validators.maxLength(4), Validators.minLength(4)])
  });

  invoiceFile:any;

  constructor( private userService:UsersService, private orderService:OrdersService, private cartService:CartService, private cartProductService:CartProductService, private modalService: NgbModal, private router:Router, private productService:ProductService ) { }

  // disable dates who have more than 3 delivery at the same day
  myFilter = (d: Date): boolean => {
    const day = d.toLocaleDateString();
    let counter=0;
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
  placeOrder(contentModal) {
    let newOrder = Object.assign(
      this.shippingDetails.value,
      {user_id: this.userService.currentUser.id},
      {cart_id: this.cartService.openCart._id},
      {total_price: this.calculateTotalPrice()},
      {reservation_date: new Date().toLocaleDateString()}
    );
    newOrder.delivery_date = newOrder.delivery_date.toLocaleDateString();
    this.orderService.addOrder(newOrder).subscribe((orderData) => {
      this.getInvoiceData(orderData).then((invoiceData) => {
        this.invoiceFile = new Blob([`${invoiceData}`], { type: 'text/plain;charset=utf-8' });
        this.openModal(contentModal);
      })

    });
  }

  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.deleteAllCart();
      this.router.navigate(['']);
    }, () => {
      this.deleteAllCart();
      this.router.navigate(['']);
    });
  }

  async deleteAllCart() {
    await this.cartProductService.getByCart(this.cartService.openCart._id).subscribe((data) => {
      data.map((cartProduct) => {
        this.cartProductService.deleteCartProduct(cartProduct._id).subscribe(() => {});
      });
    });
    await this.cartService.deleteCart(this.cartService.openCart._id).subscribe(()=>{});
    this.cartService.openCart = null;
    this.cartProductService.openCartProducts = null;
  }

  getInvoiceData(orderData) {
    return new Promise((resolve, reject) => {
      let str = '';
      this.cartProductService.getByCart(orderData.cart_id).subscribe(async(cartProducts) => {
        for(let i=0;i<cartProducts.length;i++) {
          await this.productService.getById(cartProducts[i].product_id).subscribe((product) => {
            str += product.name + " " + product.price + "₪ X" + cartProducts[i].quantity + " =" + cartProducts[i].total_price + "₪ \r\n";
            if(i==cartProducts.length-1){
              str += "\r\n Total Price: " + orderData.total_price + "₪ ";
              resolve(str);
            }
          });
        }
      });
    })
  }

  downloadInvoice() {
    saveAs(this.invoiceFile, 'invoice.txt');
  }

}
