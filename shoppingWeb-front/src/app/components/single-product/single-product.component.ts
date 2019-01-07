import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() data:any;

  quantityForm: FormGroup = new FormGroup({
    quantity: new FormControl()
  });

  constructor( private userService:UsersService, private modalService: NgbModal, private cartProductService:CartProductService, private cartService:CartService ) { }

  ngOnInit() {
  }

  openModal(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // click X or SAVE
      if(result=='save'){
        this.addToCart();
      }
    });
  }

  addToCart() {
    // check quantity value not 0
    if(this.quantityForm.controls.quantity.value>0){
      // open cart existing
      if(this.cartService.openCart){
        let newProduct = this.cartProductService.openCartProducts.find((cartProduct) => {
          return cartProduct.product_id==this.data._id;
        });
        // product allready exist in cart
        if(newProduct) {
          newProduct.quantity = newProduct.quantity + this.quantityForm.controls.quantity.value;
          newProduct.total_price = newProduct.quantity*this.data.price;
          this.cartProductService.updateCartProduct(newProduct._id, newProduct).subscribe((data) => {
            this.quantityForm.reset();
            this.cartService.cartNeedToUpdate.next();
          })
        }
        // product not exist in cart
        else {
          let newCartProduct = {
          product_id: this.data._id,
          quantity: this.quantityForm.controls.quantity.value,
          cart_id: this.cartService.openCart._id,
          total_price: this.quantityForm.controls.quantity.value*this.data.price
          };
          this.cartProductService.addCartProduct(newCartProduct).subscribe((data) => {
            this.quantityForm.reset();
            this.cartService.cartNeedToUpdate.next();
          });
        }
      }
      
      // open cart not existing
      else {
        let newCart = { user_id: this.userService.currentUser.id, production_date: new Date().toLocaleDateString() };
        this.cartService.addCart(newCart).subscribe((data) => {
          this.cartService.newCartOpened.next();
          this.cartService.openCart = data;
          let newCartProduct = {
            product_id: this.data._id,
            quantity: this.quantityForm.controls.quantity.value,
            cart_id: data._id,
            total_price: this.quantityForm.controls.quantity.value*this.data.price
            };
          this.cartProductService.addCartProduct(newCartProduct).subscribe((data) => {
            this.cartService.cartNeedToUpdate.next();
          })
        })
        
      }
    }
  }

}
