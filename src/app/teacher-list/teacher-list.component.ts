import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'app/services/dashboard.service';

export interface TeacherData {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  subject: string;
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'department', 'subject'];
  dataSource: MatTableDataSource<any> = undefined;

  teachers: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getNewAdmission().subscribe((res)=>{
      console.log("response teacher list", res);
      this.teachers = JSON.parse(JSON.stringify(res));
    });
    console.log(this.teachers);
    this.dataSource = new MatTableDataSource(this.teachers);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
