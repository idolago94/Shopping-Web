import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

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

  constructor( private userService:UsersService ) { }

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
