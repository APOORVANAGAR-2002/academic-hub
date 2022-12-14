import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  studentData = [
    { enrollment: '34545', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 4, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '34532', firstName: 'Mahi', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 1, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '34432', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 1, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '23454', firstName: 'Mahi', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12835', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '34545', firstName: 'Mahi', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 2, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Mahi', lastName: 'Sharma', year: 2, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '34532', firstName: 'Riya', lastName: 'Sharma', year: 4, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '23455', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 2, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Mahi', lastName: 'Sharma', year: 4, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '23454', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '23454', firstName: 'Mahi', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 2, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '56765', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Mahi', lastName: 'Sharma', year: 4, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '34535', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 5, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Mahi', lastName: 'Sharma', year: 1, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '45676', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Shikhar', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '56764', firstName: 'Mahi', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '12892', firstName: 'Riya', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '23432', firstName: 'Aman', lastName: 'Sharma', year: 3, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Male', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },
    { enrollment: '56787', firstName: 'Riya', lastName: 'Sharma', year: 1, email: 'aman@gmail.com', department: 'Engineering', branch: 'B.Tech', gender: 'Female', dateOfAdmission: '12-2-19', course: 'CSE', phoneNumber: '37467346237' },

  ]

  URL: string = 'https://academic-hub-backend.herokuapp.com';
  email: string = 'mody@gmail.com';
  constructor(private http: HttpClient) { }

  getNewAdmission() {
    return this.http.get(`${this.URL}/adm/v2/admin/studentInfo/allStudent`);
  }

  addStudentInfo(formaData: any) {
    return this.http.post(`${this.URL}/adm/v2/admin/studentinfo/addstudent`, formaData);
  }

  addTeacherInfo(formData: any) {
    return this.http.post(`${this.URL}/adm/v3/admin/teacherInfo/addTeacher`, formData);
  }

  getAllTeachers() {
    return this.http.get(`${this.URL}/adm/v3/admin/teacherInfo/allTeacher`);
  }

  getTotalDepartments(email: string) {
    return this.http.get(`${this.URL}/admin/totalDepartments/${this.email}`)
  }

  getTotalCourses(email: string) {
    return this.http.get(`${this.URL}/admin/totalCourses/${this.email}`)
  }

  getStudentProfile(enrollment: string) {
    return this.http.get(`${this.URL}/student/${enrollment}`);
  }

  getProfilePdf(enrollment: string) {
    return this.http.post(`${this.URL}/student/generatePdf/${enrollment}`, null, {
      responseType: 'blob',
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  login(formData: any) {
    return this.http.post(`${this.URL}/login`, formData);
  }

}
