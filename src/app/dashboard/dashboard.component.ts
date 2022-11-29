import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentList: any[];
  totalStudents: number;
  totalTeacher: number;
  totalDepartments: number;
  totalCourses: number;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };

  email: string;
  ngOnInit() {

    this.getNewAddmission();
    this.getStudentCount();
    this.getTeachersCount();
    this.getDepartmentsCount();
    this.getCoursesCount();
    this.email = this.route.snapshot.paramMap.get('email');

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);


    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    }
    var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);



    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
    var datawebsiteViewsChart = {
      labels: ['CSE', 'Mechanical', 'Electrical', 'Nuclear', 'Bio-tech'],
      series: [
        [8, 5, 7, 3, 1]
      ]
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 10,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }

  getNewAddmission() {
    this.dashboardService.getNewAdmission().subscribe((res) => {
      this.studentList = JSON.parse(JSON.stringify(res));
      this.studentList = this.studentList.slice(0,10);
    })
  }
  getStudentCount() {
    this.dashboardService.getNewAdmission().subscribe((res) => {
      var students = JSON.parse(JSON.stringify(res));
      this.totalStudents = students.length;
      console.log(this.totalStudents);
    })
  }
  getTeachersCount() {
    this.dashboardService.getAllTeachers().subscribe((res) => {
      var teachers = JSON.parse(JSON.stringify(res));
      this.totalTeacher = teachers.length;
      console.log(this.totalTeacher);
    })
  }
  getDepartmentsCount() {
    this.dashboardService.getTotalDepartments(this.email).subscribe((res) => {
      var department = JSON.parse(JSON.stringify(res));
      this.totalDepartments = department.length;
      console.log(this.totalDepartments);
    })
  }
  getCoursesCount() {
    this.dashboardService.getTotalCourses(this.email).subscribe((res) => {
      var course = JSON.parse(JSON.stringify(res));
      this.totalCourses = course.length;
      console.log(this.totalCourses);
    })
  }



}
