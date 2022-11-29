import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'app/services/dashboard.service';

export interface TeacherData {
  teacherId: string;
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

  displayedColumns: string[] = ['teacherId', 'firstName', 'lastName', 'email', 'department', 'subject'];
  dataSource: MatTableDataSource<any> = undefined;

  teachers: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getAllTeachers().subscribe((res) => {
      console.log("response teacher list", res);
      this.teachers = JSON.parse(JSON.stringify(res));
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(res)));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
