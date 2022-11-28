import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  title: string;
  icon: string;
  route?: string;
  children?: RouteInfo[]
}
export const ROUTES: RouteInfo[] = [
  { title: 'dashboard', icon: 'dashboard', route: 'dashboard' },
  {
    title: 'all-students', icon: 'user', route: 'student/allStudents'
  },
  {
    title: 'add-student', icon: 'user', route: 'student/addStudent'
  },
  {
    title: 'edit-student', icon: 'user', route: 'student/editStudent'
  },
  {
    title: 'view-student', icon: 'user', route: 'student/viewStudent'
  },
  {
    title: 'all-teachers', icon: 'user', route: 'teacher/allTeachers'
  },
  {
    title: 'add-teacher', icon: 'user', route: 'teacher/addTeacher'
  },
  {
    title: 'edit-teacher', icon: 'user', route: 'teacher/editTeacher'
  },

  // { path: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
  // {
  //   path: 'student', title: 'Student', icon: 'person', children: [
  //     { path: 'add-student', title: 'Add-Student', icon: 'plus' },
  //     { path: 'edit-student', title: 'Edit-Student', icon: 'plus' },
  //     { path: 'all-students', title: 'All-Students', icon: 'plus' },
  //     { path: 'view-student', title: 'View-Student', icon: 'plus' },
  //   ]
  // },
  // {
  //   path: 'teacher', title: 'Teacher', icon: 'person', children: [
  //     { path: '/add-teacher', title: 'Add-Teacher', icon: 'plus' },
  //     { path: '/edit-teacher', title: 'Edit-Teacher', icon: 'plus' },
  //     { path: '/all-teachers', title: 'All-Teachers', icon: 'plus' },
  //   ]
  // },
  // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '', children: null },
  // { path: '/typography', title: 'Typography', icon: 'library_books', class: '', children: null },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  // isMobileMenu() {
  //     if ($(window).width() > 991) {
  //         return false;
  //     }
  //     return true;
  // };
}
