import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private dashboardService: DashboardService) {
    this.createForm();
  }
  Deaprtments: string[] = [];
  Courses: string[] = [];

  createForm() {
    this.userForm = new FormGroup({
      password: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      orgName: new FormControl("", Validators.required),
      departments: new FormControl(null),
      courses: new FormControl(null),
    });
  }

  get createFormControl() {
    return this.userForm.controls;
  }
  addDept(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our skill
    if ((value || '').trim()) {
      this.Deaprtments.push(value.trim());
      this.userForm.controls['departments'].setValue(this.Deaprtments.toString());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeDept(tags: any): void {
    const index = this.Deaprtments.indexOf(tags);
    if (index >= 0) {
      this.Deaprtments.splice(index, 1);
    }
  }
  get SkillSet() {
    return <FormArray>this.userForm.get('skills');
  }



}
