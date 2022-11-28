import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  userForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

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
      department: new FormControl(''),
      subject: new FormControl(''),
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

  submitForm() {
    const value = this.userForm.value;
    console.log(value);
    this.dashboardService.addStudentInfo(value).subscribe((res) => {
      console.log("Teacher added response:", res);
    })
  }

  ngOnInit() {
  }



}
