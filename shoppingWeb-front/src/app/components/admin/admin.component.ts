import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allProducts:any;
  allCategories:any;
  showView:boolean = false;
  currentProduct_id:string;

  productForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    category_id: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    picture: new FormControl(null, [Validators.required]),
  });

  newCategory: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });

  constructor( public snackBar: MatSnackBar, private modalService: NgbModal, private router:Router, private userService:UsersService, private productService:ProductService, private categoryService:CategoryService ) { }

  ngOnInit() {
    if(this.userService.currentUser.authority!='admin'){
      this.router.navigate(['']);
    }

    this.getAllProducts();

    this.getAllCategory();

    this.categoryService.newCategoryAdded.subscribe(() => {
      this.getAllCategory();
    });

    this.productService.productUpdate.subscribe(() => {
      this.getAllProducts();
    })
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe((data) => {
      this.allCategories = data;
    });
  }

  getAllProducts() {
    this.productService.getAll().subscribe((data) => {
      this.allProducts = data;
    });
  }

  showProduct(product) {
    this.currentProduct_id = product._id;
    this.productForm.setValue({
      name: product.name,
      category_id: product.category_id,
      price: product.price,
      picture: product.picture
      });
      this.showView = true;
  }

  openModal(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // click X or SAVE
      if(result=='save'){
        this.categoryService.addCategory(this.newCategory.value).subscribe((data) => {
          this.newCategory.reset();
          this.snackBar.open('New category added!! ⭐');
          this.categoryService.newCategoryAdded.next();
        });
      }
    });
  }

  updateProduct(type) {
    switch (type) {
      case 'save': 
        this.productService.updateProduct(this.currentProduct_id, this.productForm.value).subscribe((data) => {
          this.currentProduct_id = null;
          this.showView = false;
          this.productForm.reset();
          this.productService.productUpdate.next();
        });
        break;
      case 'delete':
        this.productService.deleteProduct(this.currentProduct_id).subscribe((data) => {
          this.currentProduct_id = null;
          this.showView = false;
          this.productForm.reset();
          this.productService.productUpdate.next();
        });
        break;
    }
  }
}
