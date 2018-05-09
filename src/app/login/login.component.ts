import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(
    private router: Router, 

    private formBuilder: FormBuilder) {
    const userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    const passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  ngOnInit(): void {

  }

  login() {
    console.log(this.loginForm.controls['userName'].value);
  }
  
}
