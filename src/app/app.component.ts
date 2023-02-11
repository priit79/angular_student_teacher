import {Component, OnInit} from '@angular/core';
import {Student} from "./school/shared/models/Student";
import {Teacher} from "./school/shared/models/Teacher";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.students = this.fetchStoodents();
    this.teachers = this.fetchTeaachers();
  }
  title = 'angular-student-teacher-exercise';

  students: Student[] = [];
  studentNames: string[] = ['Imbi', 'Liisu', 'August'];

  teachers: Teacher[] = [];
  teacherNames: string[] = ['Vinod', 'Uche', 'Laur'];


  fetchStoodents(): Student[] {
    let stoodents: Student[] = [];
    stoodents.push(new Student('Eedu', '6st grade'));
    return stoodents;
  }

  fetchTeaachers(): Teacher[] {
    let teaachers: Teacher[] = [];
    teaachers.push(new Teacher('Udupets', 'mathematics'))
    return teaachers;
  }

  addStudent() {
    let studentName = this.studentNames.at(Math.floor(Math.random() * this.studentNames.length));
    // @ts-ignore
    this.students.push(new Student(studentName, '10th grade'))
  }

  addTeacher() {
    let teacherName = this.teacherNames.at(Math.floor(Math.random() * this.teacherNames.length));
    // @ts-ignore
    this.teachers.push(new Teacher(teacherName, 'programming'))
  }
}
