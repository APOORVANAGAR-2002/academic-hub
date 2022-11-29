import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  userForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Skills: string[] = [];
  isAddMode: boolean;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute, private fb: FormBuilder) {
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

  params: string;
  studentInfo: any;

  ngOnInit() {
    this.createForm();
    this.params = this.route.snapshot.paramMap.get('id');
    console.log(this.params);
    this.getStudentInfo();
  }

  getStudentInfo() {
    this.dashboardService.getStudentProfile(this.params).subscribe(res => {
      console.log(res);
      this.userForm = JSON.parse(JSON.stringify(res))
      console.log(this.userForm);
    })
    // this.dashboardService.getStudentProfile(this.params).subscribe((res) => {
    //   this.studentInfo = JSON.parse(JSON.stringify(res));
    //   console.log(this.studentInfo);

    //   if (this.studentInfo) {
    //     this.userForm.get('firstName').setValue(this.studentInfo.firstName);
    //     console.log(this.userForm);
    //   }
    // })
  }


}
