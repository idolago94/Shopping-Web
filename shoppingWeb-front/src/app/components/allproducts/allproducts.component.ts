import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  

  constructor( private productService:ProductService, private categoryService:CategoryService ) { }

  allCategory: any;
  allProducts:any;
  dataArray:any;

  searchForm: FormGroup = new FormGroup({
    search: new FormControl(),
    selectedCategory: new FormControl()
  });
  

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.allProducts = data;
      this.dataArray = data;
    });
    this.categoryService.getAll().subscribe((data) => {
      this.allCategory = data;
    })
  }

  search() {
    this.allProducts.map((product) => {
      if(this.searchForm.controls.search.value==product.name){
        this.dataArray=[product];
      }
    });
  }

  filterByCategory() {
    if(this.searchForm.controls.selectedCategory.value==0){
      this.dataArray = this.allProducts;
    }
    else {
      this.productService.getByCategoryId(this.searchForm.controls.selectedCategory.value)
      .subscribe((data) => {
        this.dataArray = data;
      });
    }
  }

}
