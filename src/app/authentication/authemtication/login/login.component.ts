import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  sub=false;
  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  get loginControls() { return this.loginForm.controls; }

  constructor(private router: Router, private authservice: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password

    });
  }

  login() {
    this.sub=true;
    this.loading = true;
    this.authservice.login(this.loginForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/flights'])
      } else { return; }
    });
  }

}
