import {Component, OnInit} from '@angular/core';
import {Student} from "./school/shared/models/Student";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.students = this.fetchStoodents();
  }
  title = 'angular-student-teacher-exercise';

  students: Student[] = [];
  studentNames: string[] = ['Imbi', 'Liisu', 'August'];

  fetchStoodents(): Student[] {
    let stoodents: Student[] = [];

    stoodents.push(new Student('Eedu', '6st grade'));

    return stoodents;
  }

  addStudent() {
    let studentName = this.studentNames.at(Math.floor(Math.random() * this.studentNames.length));
    // @ts-ignore
    this.students.push(new Student(studentName, '10th grade'))


  }

  addTeacher() {

  }
}
