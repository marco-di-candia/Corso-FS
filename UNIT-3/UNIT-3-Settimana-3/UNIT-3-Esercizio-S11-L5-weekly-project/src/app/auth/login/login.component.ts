import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(private authSrv: AuthServiceService, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);
    this.authSrv.login(form.value).subscribe(
      () => {
        // Login successful, redirect to home page
        this.router.navigate(['/']);
      },
      (error) => {
        // Error occurred during login, handle error
        console.error(error);
        this.errorMessage = 'Email or password is incorrect';
      }
    );
  }
}
