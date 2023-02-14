import { Component } from '@angular/core';
import {Student} from "../shared/models/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  students: Student[] = [];

  Name: string = '';


  Grade: number = 0;




  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.Name, this.Grade));
    studentForm.reset();
  }
}
