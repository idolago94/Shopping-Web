import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartService } from 'src/app/services/cart.service';

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

  constructor( private modalService: NgbModal, private cartProductService:CartProductService, private cartService:CartService ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // click X or SAVE
      if(result=='save'){
        this.addToCart();
      }
    });
  }

  addToCart() {
    if(this.quantityForm.controls.quantity.value>0){
      let newProduct = this.cartProductService.openCartProducts.find((cartProduct) => {
        return cartProduct.product_id==this.data._id;
      });
      // product allready exist in cart
      if(newProduct) {
        newProduct.quantity = newProduct.quantity + this.quantityForm.controls.quantity.value;
        this.cartProductService.updateCartProduct(newProduct._id, newProduct).subscribe((data) => {
          this.quantityForm.reset();
          this.cartService.productAddedToCart.next();
        })
      }
      // product not exist in cart
      else {
        let newCartProduct = {
        product_id: this.data._id,
        quantity: this.quantityForm.controls.quantity.value,
        cart_id: this.cartService.openCart._id
        };
        this.cartProductService.addCartProduct(newCartProduct).subscribe((data) => {
          this.quantityForm.reset();
          this.cartService.productAddedToCart.next();
        });
      }
    }
  }

}