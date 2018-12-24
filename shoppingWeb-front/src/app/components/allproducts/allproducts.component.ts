import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor( private productService:ProductService ) { }

  allProducts:any;

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.allProducts = data;
    })
  }

}
