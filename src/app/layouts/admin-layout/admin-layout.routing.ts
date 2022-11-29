import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../student/student.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../profile/profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TeacherListComponent } from 'app/teacher-list/teacher-list.component';
import { TeacherComponent } from 'app/teacher/teacher.component';
import { SignupComponent } from 'app/signup/signup.component';
import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '', redirectTo: 'dashboard/:email', pathMatch: 'full' },
    { path: 'dashboard/:email', component: DashboardComponent },
    { path: 'student/addStudent', component: UserProfileComponent },
    { path: 'student/editStudent/:id', component: UserProfileComponent },
    { path: 'student/allStudents', component: TableListComponent },
    { path: 'student/allStudents/:id', component: TypographyComponent },
    { path: 'teacher/addTeacher', component: TeacherComponent },
    { path: 'teacher/editTeacher', component: TeacherComponent },
    { path: 'teacher/allTeachers', component: TeacherListComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    // { path: 'icons', component: IconsComponent },
    // { path: 'maps', component: MapsComponent },
    // { path: 'notifications', component: NotificationsComponent },
    // { path: 'upgrade', component: UpgradeComponent },
];
