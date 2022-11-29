import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'app/services/dashboard.service';

export interface StudentData {
  enrollment: string;
  firstName: string;
  lastName: string;
  year: number;
  email: string;
  department: string;
  branch: string;
  gender: string;
  dateOfAdmission: string;
  course: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['enrollment', 'firstName', 'lastName', 'year', 'email', 'department', 'branch', 'gender', 'dateOfAdmission', 'course', 'phoneNumber'];
  dataSource: MatTableDataSource<any> = undefined;

  students: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getNewAdmission().subscribe((res) => {
      var students = JSON.parse(JSON.stringify(res));
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(res)));
      console.log(students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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

