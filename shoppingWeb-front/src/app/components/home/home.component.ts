import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {Router} from "@angular/router"; 
import { CartService } from 'src/app/services/cart.service';

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

  constructor( private userService:UsersService, private router: Router, private cartService:CartService ) { }

  ngOnInit() {
    
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
        this.cartService.getByUserId(data.id).subscribe((data) => {
          this.userCart = data[0];
        })
      }
    });
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      this.userService.currentUser = null;
      this.loginForm.reset();
    })
  }
}
