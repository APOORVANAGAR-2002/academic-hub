import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup;
  constructor(private dashboardService: DashboardService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.userForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }
  submitForm() {
    const value = this.userForm.value;
    console.log(value);
    alert('Logged in successfully');
    this.router.navigate(['/dashboard/mody@gmail.com']);
    this.dashboardService.login(value).subscribe((res) => {
      console.log("Login:", res);
    })
  }

}
