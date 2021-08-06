import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StartupService } from '../services/startup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public currentUserName = "";

  constructor(private router: Router, private service: StartupService) { }

  ngOnInit(): void { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  fnLogin() {
    sessionStorage.setItem('isActive', 'true');

    this.currentUserName = "Humaira";

    //navigation params to pass to dashboard
    this.service.data = {
      username: this.currentUserName
    }

    this.router.navigate(['dashboard'])
  }
}
