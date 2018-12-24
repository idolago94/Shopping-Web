import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service'; 
import {Router} from "@angular/router"; 
import { MatStepper } from '@angular/material';

// password validation
function passwordConfirming(c): any {
  if(!c || !c.parent) return ;

  if(c.parent.controls.password.value!=c.value){
    return { invalid: true };
  }
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor( private userService:UsersService, private router: Router ) { }

  allUsers = [];
  registerError: string;
  allCity = ['Tel Aviv', 'Ashdod', 'Herzilya', 'Qiryat Ono', 'Yehud', 'Ramat Gan', 'Jerusalem'];

  personalDetailsForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirm_password: new FormControl(null, [Validators.required, passwordConfirming])
  });
  adressDetailsForm: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required]),
    adress: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
  });


  ngOnInit() {

  }

  register(stepper: MatStepper) {
    let newUser = Object.assign({}, this.personalDetailsForm.value, this.adressDetailsForm.value);
    delete newUser.confirm_password;
    this.userService.addUser(newUser).subscribe((response) => {
      if(response.error){
        this.registerError = response.error;
        stepper.reset();
      }
      else{
        this.userService.currentUser = response;
        this.router.navigate(['']);
      }
    })
  }
}
