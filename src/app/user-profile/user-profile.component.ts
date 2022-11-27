import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { DashboardService } from 'app/services/dashboard.service';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  emptyControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);


  gender: any[] = ['Male', 'Female', 'Binary', 'Do not wish to disclose'];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Skills: string[] = [];

  constructor(private dashboardService: DashboardService) {
    this.createForm();
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  createForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      enrollment: new FormControl("", Validators.required),
      year: new FormControl(''),
      phoneNumber: new FormControl('', Validators.minLength(10)),
      gender: new FormControl(''),
      department: new FormControl(''),
      branch: new FormControl(''),
      course: new FormControl(''),
      dateOfAdmission: new FormControl(''),
      skills: new FormControl(null),
      projects: new FormArray([
        new FormGroup({
          projectName: new FormControl(''),
          projectDescription: new FormControl('')
        })
      ])
    });
  }

  get createFormControl() {
    return this.userForm.controls;
  }

  addProject() {
    const control = <FormArray>this.userForm.controls['projects'];
    control.push(
      new FormGroup({
        projectName: new FormControl(''),
        projectDescription: new FormControl('')
      })
    );
  }
  removeProject(index: number) {
    const control = <FormArray>this.userForm.controls['projects'];
    control.removeAt(index);
  }

  submitForm() {
    const value = this.userForm.value;
    console.log(value);
    this.dashboardService.addStudentInfo(value).subscribe((res) => {
      console.log("Student added response:", res);
    })
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our skill
    if ((value || '').trim()) {
      this.Skills.push(value.trim());
      this.userForm.controls['skills'].setValue(this.Skills.toString());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(tags: any): void {
    const index = this.Skills.indexOf(tags);
    if (index >= 0) {
      this.Skills.splice(index, 1);
    }
  }
  get SkillSet() {
    return <FormArray>this.userForm.get('skills');
  }

  ngOnInit() {
  }

}
