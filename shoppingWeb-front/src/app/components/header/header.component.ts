import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CartService } from 'src/app/services/cart.service';
import { CartProductService } from 'src/app/services/cart-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countCartProducts:number;

  constructor( private userService:UsersService, private cartService:CartService, private cartProductService:CartProductService, private router:Router ) { }

  ngOnInit() {
    
  }

  doLogout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
