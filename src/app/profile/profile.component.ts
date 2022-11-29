import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class TypographyComponent implements OnInit {

  skills = ['html', 'css', 'bootstrap', 'react', 'angular', 'python'];
  projects = [
    { projectName: 'Student Management', projectDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
    { projectName: 'Student Management', projectDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
    { projectName: 'Student Management', projectDesciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  ]
  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }

  params: string;
  studentInfo: any;
  ngOnInit() {
    this.params = this.route.snapshot.paramMap.get('id');
    console.log(this.params);
    this.getStudentInfo();
  }

  getStudentInfo() {
    this.dashboardService.getStudentProfile(this.params).subscribe((res) => {
      this.studentInfo = JSON.parse(JSON.stringify(res));
      console.log(this.studentInfo);
    })
  }

  downloadPdf() {
    this.dashboardService.getProfilePdf(this.params).subscribe((res) => {
      saveAs(res, `${this.params}-Resume`);
      console.log("Resume downloaded", res);
    }, err => {
      alert('Problem while downloading file');
      console.log(err);
    }
    )
  }



}
